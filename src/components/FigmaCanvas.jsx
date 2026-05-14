import { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

const FigmaCanvas = ({ images }) => {
  const ITEM_WIDTH = 600;
  const ITEM_GAP = 128; 

  // MAGIA 1: CHAVE DE SESSÃO ÚNICA
  // Vai à primeira imagem (ex: /apresentacoes/nabu/pag-01.png) e extrai o "nabu"
  const projectFolder = images[0] ? images[0].split('/')[2] : 'default';
  const STORAGE_KEY = `figma_pos_${projectFolder}_${images.length}`; 

  // MAGIA 2: ESCALA DINÂMICA
  // Fórmula que adapta o zoom inicial: 32 páginas -> ~0.14 | 10 páginas -> 0.45 | 5 páginas -> 0.60
  const BASE_SCALE = Math.min(0.6, 4.5 / images.length); 

  const canvasRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const [currentScale, setCurrentScale] = useState(BASE_SCALE);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // MAGIA 3: MATEMÁTICA DE SIMETRIA PERFEITA
  const calculateDefaultPositions = () => {
    if (!images || images.length === 0) return [];
    
    // Calcula apenas a largura do que existe (X imagens + X-1 espaços)
    const totalContentWidth = (images.length * ITEM_WIDTH) + ((images.length - 1) * ITEM_GAP);
    // Ponto de partida exato para que a linha inteira fique cortada ao meio no 0
    const startX = -(totalContentWidth / 2);

    return images.map((_, i) => ({
      x: startX + (i * (ITEM_WIDTH + ITEM_GAP)),
      y: 0
    }));
  };

  const [positions, setPositions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return calculateDefaultPositions();
  });

  const syncScale = (ref) => setCurrentScale(ref.state.scale);

  const closeOverlay = () => setSelectedIndex(null);
  const showPrev = (e) => { if (e) e.stopPropagation(); setSelectedIndex((p) => (p > 0 ? p - 1 : p)); };
  const showNext = (e) => { if (e) e.stopPropagation(); setSelectedIndex((p) => (p < images.length - 1 ? p + 1 : p)); };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeOverlay();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (canvasRef.current && !canvasRef.current.contains(event.target)) {
        if (!isFullscreen) setIsPaused(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isFullscreen]);

  const handleDragEnd = (index, info) => {
    setPositions((prev) => {
      const newPos = [...prev];
      newPos[index] = {
        x: newPos[index].x + (info.offset.x / currentScale),
        y: newPos[index].y + (info.offset.y / currentScale)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPos));
      return newPos;
    });
  };

  const resetLayout = () => {
    setPositions(calculateDefaultPositions());
    localStorage.removeItem(STORAGE_KEY);
  };
  
  const containerClasses = isFullscreen 
    ? "fixed inset-0 z-[120] bg-[#0a0a0a]" 
    : "relative w-full h-[70vh] min-h-[500px] bg-[#0a0a0a] border border-white/20";

  // AS VARIANTES: O efeito Alt+Shift perfeito do Figma
  const containerVariants = {
    fullscreen: {
      scale: [0.95, 1], // Arranca ligeiramente mais pequeno e faz pop para o tamanho real
      opacity: [0.3, 1], // Fica sólido rapidamente para esconder o salto do CSS
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } // A inércia suave da Apple
    },
    embedded: {
      scale: [1.05, 1], // Quando fecha, parece que encolhe de volta para a caixa
      opacity: [0.3, 1],
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      animate={isFullscreen ? "fullscreen" : "embedded"}
      ref={canvasRef} 
      // Adicionado transform-gpu e origin-center para garantir escala a partir do meio
      className={`${containerClasses} text-white cursor-grab active:cursor-grabbing overflow-hidden transform-gpu origin-center`}
    >
      
      {/* CAMADA DE PAUSA */}
      {isPaused && !isFullscreen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-[60] bg-black/60 backdrop-blur-[2px] flex items-center justify-center cursor-pointer group"
          onClick={() => setIsPaused(false)}
        >
          <motion.div 
            animate={{ scale: [1, 1.02, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="border border-white/50 bg-black/80 px-8 py-4 text-sm tracking-widest uppercase font-bold text-white group-hover:bg-white group-hover:text-black transition-colors shadow-2xl"
          >
            Clique para interagir com os layouts
          </motion.div>
        </motion.div>
      )}

      {/* BOTÃO TELA CHEIA ANIMADO */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsFullscreen(!isFullscreen);
          setIsPaused(false); 
        }}
        className="absolute top-6 right-6 z-[70] bg-black/90 border border-white/30 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-colors backdrop-blur-sm"
      >
        {isFullscreen ? '✕ Sair de Tela Cheia' : '⛶ Tela Cheia'}
      </motion.button>

      {/* OVERLAY DE CLOSE-UP */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[150] bg-black/95 flex flex-col items-center justify-center cursor-default backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
            <div className="text-[12px] text-gray-500 uppercase tracking-widest bg-[#0a0a0a] px-4 py-2 border border-white/20">
              NABU_PAG_{selectedIndex + 1} DE {images.length}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeOverlay} 
              className="text-sm uppercase tracking-widest border border-white bg-black px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              ✕ Fechar Close-up (ESC)
            </motion.button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center p-24">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={showPrev} disabled={selectedIndex === 0} className="absolute left-8 z-10 p-6 border border-white bg-black text-white hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-black disabled:hover:text-white">←</motion.button>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={images[selectedIndex]} 
              alt={`Página ${selectedIndex + 1}`} 
              className="max-w-full max-h-full object-contain border border-white/20 shadow-[0_0_100px_rgba(0,0,0,1)]" 
            />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={showNext} disabled={selectedIndex === images.length - 1} className="absolute right-8 z-10 p-6 border border-white bg-black text-white hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-black disabled:hover:text-white">→</motion.button>
          </div>
        </div>
      )}

      {/* MOTOR DO CANVAS INFINITO */}
      <TransformWrapper
        initialScale={BASE_SCALE} 
        minScale={0.01} 
        maxScale={4}
        centerOnInit={true}
        centerZoomedOut={false}
        limitToBounds={false}
        disabled={isPaused && !isFullscreen} 
        wheel={{ step: 0.0005, smoothStep: 0.0005, wheelDisabled: false }}
        onZoom={syncScale} onZoomStop={syncScale} onTransformed={syncScale}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* TOOLBAR */}
            <motion.div 
              className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center bg-black border border-white/20 p-1 text-xs font-bold uppercase tracking-widest shadow-[0_10px_40px_rgba(0,0,0,1)] pointer-events-auto transition-opacity duration-300 ${isPaused && !isFullscreen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-4 py-3 hover:bg-white hover:text-black transition-colors" onClick={() => zoomOut(0.1)}>-</motion.button>
              <div className="px-6 py-3 border-x border-white/20 text-gray-400 select-none min-w-[80px] text-center">
                {Math.round((currentScale / BASE_SCALE) * 100)}%
              </div>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-4 py-3 hover:bg-white hover:text-black transition-colors border-r border-white/20" onClick={() => zoomIn(0.1)}>+</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-3 hover:bg-white hover:text-black transition-colors" onClick={() => { resetTransform(); setCurrentScale(BASE_SCALE); }}>Reset View</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-3 bg-white text-black hover:bg-gray-300 transition-colors border-l border-white/20" onClick={resetLayout}>Organizar Layouts</motion.button>
            </motion.div>

            <TransformComponent wrapperClass="!w-full !h-full" contentClass="!w-fit !h-fit">
              <div className="w-[30000px] h-[10000px] relative bg-[radial-gradient(circle_at_center,_#ffffff33_1px,_transparent_1px)] bg-[size:40px_40px]">
                <div className="absolute top-[5000px] left-[15000px]">
                  
                  {images.map((img, index) => (
                    <motion.div 
                      key={index} 
                      drag={!isPaused || isFullscreen} 
                      dragMomentum={false}
                      onDragEnd={(e, info) => handleDragEnd(index, info)}
                      initial={{ x: positions[index].x, y: positions[index].y }}
                      animate={{ x: positions[index].x, y: positions[index].y }}
                      whileHover={{ scale: 1.02, zIndex: 50, borderColor: "rgba(255,255,255,1)" }}
                      onMouseDown={(e) => e.stopPropagation()} 
                      onClick={() => {
                        if (!isPaused || isFullscreen) setSelectedIndex(index);
                      }}
                      className="absolute w-[600px] h-fit flex flex-col border border-white/30 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] cursor-pointer z-10 transition-colors"
                    >
                      <div className="text-[12px] text-gray-500 uppercase tracking-widest p-3 border-b border-white/30 bg-[#0a0a0a]">
                        NABU_PAG_{index + 1}
                      </div>
                      <img src={img} alt={`Página ${index + 1}`} className="w-full h-auto pointer-events-none bg-white" />
                    </motion.div>
                  ))}

                </div>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </motion.div>
  );
};

export default FigmaCanvas;