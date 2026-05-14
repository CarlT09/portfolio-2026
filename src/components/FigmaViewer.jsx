import { useRef, useEffect } from 'react';

const FigmaViewer = ({ images }) => {
  const scrollContainerRef = useRef(null);

  // Navegação por Botões
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth; // Salta exatamente a largura de uma página
      container.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Navegação por Teclado (Setas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') scroll('next');
      if (e.key === 'ArrowLeft') scroll('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      
      {/* Botão Anterior */}
      <button 
        onClick={() => scroll('prev')}
        className="absolute left-4 z-10 p-4 border border-white bg-black text-white hover:bg-white hover:text-black transition-colors hidden md:block"
        aria-label="Página Anterior"
      >
        ←
      </button>

      {/* Contentor com Scroll Snapping */}
      <div 
        ref={scrollContainerRef}
        className="flex w-full max-w-6xl overflow-x-auto snap-x snap-mandatory hide-scrollbar border border-white/20"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Esconde barra no Firefox/IE
      >
        {/* Esconder barra no Chrome/Safari usando inline style de fallback, 
            mas o ideal é adicionar .hide-scrollbar::-webkit-scrollbar { display: none; } no index.css */}
        {images.map((img, index) => (
          <div 
            key={index} 
            className="w-full shrink-0 snap-center flex justify-center items-center"
          >
            {/* Aspect-video assume proporção 16:9 de apresentação */}
            <img 
              src={img} 
              alt={`Página ${index + 1}`} 
              className="w-full aspect-video object-contain bg-black"
            />
          </div>
        ))}
      </div>

      {/* Botão Seguinte */}
      <button 
        onClick={() => scroll('next')}
        className="absolute right-4 z-10 p-4 border border-white bg-black text-white hover:bg-white hover:text-black transition-colors hidden md:block"
        aria-label="Página Seguinte"
      >
        →
      </button>

    </div>
  );
};

export default FigmaViewer;