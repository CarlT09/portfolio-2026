import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// Componente para cada página individual
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="shadow-inner flex items-center justify-center overflow-hidden" ref={ref}>
      <img 
        src={props.image} 
        alt={`Página ${props.number}`} 
        className="w-full h-full object-contain"
      />
    </div>
  );
});
Page.displayName = 'Page';

const BrandBookViewer = ({ images }) => {
  const bookRef = useRef();

  // Se não houver imagens, não crasha o site
  if (!images || images.length === 0) return null;

  return (
    <div className="w-full py-12  flex flex-col items-center">
      
      {/* Moldura de Controlo de Tamanho: 
          Aqui controlamos o quão "grande" o livro aparece. 
          Aumentei para 1200px para ser mais impactante que a versão anterior.
      */}
      <div className="w-full max-w-[1200px] px-4">
        <HTMLFlipBook
          width={600} 
          height={380} // Ajusta esta proporção conforme o formato do teu manual
          size="stretch"
          minWidth={300}
          maxWidth={1000}
          minHeight={200}
          maxHeight={700}
          showCover={true}
          autoCenter={true} // A magia do centramento automático
          maxShadowOpacity={0.5}
          className="mx-auto shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          ref={bookRef}
        >
          {images.map((img, index) => (
            <Page key={index} image={img} number={index + 1} />
          ))}
        </HTMLFlipBook>
      </div>

      {/* Controlos Customizados */}
      <div className="flex items-center gap-12 mt-16">
        <button 
          onClick={() => bookRef.current.pageFlip().flipPrev()}
          className="text-white hover:text-gray-400 transition-all text-2xl font-light p-4"
        >
          ←
        </button>
        
        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] border border-white/10 px-8 py-3 rounded-full">
          Manual de Identidade Visual
        </span>

        <button 
          onClick={() => bookRef.current.pageFlip().flipNext()}
          className="text-white hover:text-gray-400 transition-all text-2xl font-light p-4"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BrandBookViewer;