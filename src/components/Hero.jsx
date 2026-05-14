import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <header className="relative py-32 md:py-48 flex flex-col justify-center min-h-[80vh]">
      
      {/* 1. O BRILHO DE FUNDO */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 z-0" />

      {/* 2. O LOGÓTIPO NOMINAL EM SVG (Framer Motion Line Animation) */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 0.12 }} // Deixamos o traço muito subtil para não competir com o texto
        transition={{ duration: 2, delay: 0.5 }}
        // Empurrado bem para a direita com translate-x para cortar a imagem de forma editorial e misteriosa
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[35%] md:translate-x-[30%] pointer-events-none z-0 select-none w-[600px] md:w-[900px] lg:w-[1200px]"
      >
        <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Substituímos o 'fill="white"' por 'stroke="white"' para que a matemática do React 
            consiga desenhar apenas as linhas em tempo real através do 'pathLength'.
          */}
          <motion.path 
            d="M251.564 632.566C236.98 632.566 224.248 629.66 213.369 623.85C202.72 618.04 194.387 609.789 188.368 599.098C182.581 588.407 179.688 575.857 179.688 561.447V442.218C179.688 427.576 182.581 414.91 188.368 404.219C194.387 393.528 202.72 385.393 213.369 379.815C224.248 374.005 236.98 371.1 251.564 371.1C266.379 371.1 279.11 374.121 289.759 380.164C300.639 386.207 308.972 394.69 314.759 405.613C320.778 416.537 323.787 429.436 323.787 444.31H300.87C300.87 427.809 296.472 414.91 287.675 405.613C278.879 396.317 266.842 391.668 251.564 391.668C236.517 391.668 224.596 396.2 215.799 405.265C207.003 414.096 202.605 426.414 202.605 442.218V561.447C202.605 577.251 207.003 589.685 215.799 598.749C224.596 607.581 236.517 611.997 251.564 611.997C267.073 611.997 279.11 607.349 287.675 598.052C296.472 588.523 300.87 575.624 300.87 559.355H323.787C323.787 574.23 320.778 587.129 314.759 598.052C308.972 608.976 300.639 617.459 289.759 623.501C279.11 629.544 266.379 632.566 251.564 632.566Z" 
            stroke="white" strokeWidth="3" fill="transparent"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.path 
            d="M523.635 628.979V374.686H546.67V608.079H667.082V628.979H523.635Z" 
            stroke="white" strokeWidth="3" fill="transparent"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, ease: "easeInOut", delay: 0.9 }}
          />
          <motion.path 
            d="M748.205 628.979C732.22 628.979 718.32 626.187 706.505 620.602C694.921 615.017 685.886 607.105 679.399 596.866C673.144 586.395 670.017 574.178 670.017 560.215H692.952C692.952 574.876 697.933 586.627 707.895 595.47C717.856 604.08 731.293 608.385 748.205 608.385C764.422 608.385 777.048 604.313 786.083 596.168C795.35 588.023 799.983 576.737 799.983 562.31C799.983 549.976 796.624 539.272 789.906 530.197C783.187 521.121 773.805 514.838 761.758 511.348L730.482 501.574C713.571 496.454 700.365 487.844 690.867 475.744C681.6 463.411 676.967 448.867 676.967 432.112C676.967 418.848 679.863 407.445 685.654 397.904C691.446 388.131 699.67 380.568 710.327 375.216C721.216 369.864 733.957 367.188 748.553 367.188C770.33 367.188 787.589 373.238 800.331 385.338C813.073 397.439 819.56 413.845 819.791 434.555H796.856C796.856 420.128 792.454 408.725 783.651 400.348C774.847 391.97 763.032 387.782 748.205 387.782C733.147 387.782 721.331 391.505 712.76 398.952C704.188 406.398 699.902 416.87 699.902 430.367C699.902 442.002 703.145 452.241 709.632 461.084C716.119 469.694 725.154 475.86 736.738 479.583L768.013 489.357C785.157 494.709 798.593 503.785 808.324 516.583C818.054 529.382 822.919 544.275 822.919 561.263C822.919 574.992 819.791 586.976 813.536 597.215C807.513 607.222 798.825 615.017 787.473 620.602C776.353 626.187 763.264 628.979 748.205 628.979Z" 
            stroke="white" strokeWidth="3" fill="transparent"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, ease: "easeInOut", delay: 1.2 }}
          />
          <motion.path 
            d="M307.237 550.735C297.318 550.735 289.417 548.118 283.535 542.885C277.768 537.652 274.885 530.732 274.885 522.126C274.885 513.52 277.653 506.716 283.189 501.715C288.84 496.715 296.28 494.214 305.507 494.214H336.82V483.573C336.82 476.595 334.86 471.187 330.938 467.349C327.132 463.511 321.654 461.592 314.503 461.592C308.044 461.592 302.681 463.104 298.413 466.128C294.261 469.152 291.839 473.222 291.147 478.339H279.729C280.767 470.198 284.458 463.686 290.801 458.801C297.26 453.8 305.161 451.3 314.503 451.3C324.768 451.3 332.957 454.207 339.069 460.022C345.182 465.837 348.239 473.629 348.239 483.398V548.991H336.993V529.976H335.09L337.685 526.836C337.685 534.046 334.917 539.861 329.381 544.281C323.845 548.584 316.463 550.735 307.237 550.735ZM310.178 541.141C318.136 541.141 324.537 539.105 329.381 535.035C334.341 530.964 336.82 525.731 336.82 519.335V503.46H305.507C299.74 503.46 295.069 505.088 291.493 508.344C288.033 511.601 286.303 515.904 286.303 521.254C286.303 527.301 288.437 532.127 292.704 535.733C297.087 539.338 302.911 541.141 310.178 541.141Z" 
            stroke="white" strokeWidth="3" fill="transparent"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, ease: "easeInOut", delay: 1.5 }}
          />
          <motion.path 
            d="M625.517 560.203C618.131 560.203 611.727 558.753 606.303 555.855C600.879 552.956 596.667 548.782 593.667 543.333C590.666 537.884 589.166 531.449 589.166 524.029V497.594C589.166 490.057 590.666 483.622 593.667 478.289C596.667 472.84 600.879 468.666 606.303 465.767C611.727 462.869 618.131 461.419 625.517 461.419C632.903 461.419 639.307 462.869 644.731 465.767C650.155 468.666 654.367 472.84 657.367 478.289C660.368 483.622 661.868 489.999 661.868 497.42V524.029C661.868 531.449 660.368 537.884 657.367 543.333C654.367 548.782 650.155 552.956 644.731 555.855C639.307 558.753 632.903 560.203 625.517 560.203ZM625.517 547.855C632.672 547.855 638.211 545.826 642.135 541.768C646.058 537.71 648.02 531.797 648.02 524.029V497.594C648.02 489.825 646 483.912 641.961 479.854C638.038 475.796 632.556 473.767 625.517 473.767C618.478 473.767 612.938 475.796 608.899 479.854C604.976 483.912 603.014 489.825 603.014 497.594V524.029C603.014 531.797 604.976 537.71 608.899 541.768C612.938 545.826 618.478 547.855 625.517 547.855Z" 
            stroke="white" strokeWidth="3" fill="transparent"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3.5, ease: "easeInOut", delay: 1.8 }}
          />
          <motion.path 
            d="M493.725 578.094V553.506H515.485V629.631H448.217V607.848H485.759L424.399 501.462L443.245 490.57L493.725 578.094ZM493.725 396.586L377.497 397.214V607.848H386.563V629.631H355.736L355.74 375.551L515.485 374.686V485.479H493.725V396.586Z" 
            stroke="white" strokeWidth="3" fill="transparent"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4.5, ease: "easeInOut", delay: 2.1 }}
          />
        </svg>
      </motion.div>
      
      {/* 3. O CONTEÚDO PRINCIPAL (z-10 para flutuar acima das linhas) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6"
        >
          Portefólio & Arquivo
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[8rem] font-bold mb-8 tracking-tighter leading-[0.85]"
        >
          Carlos <br className="hidden md:block"/>
          <span className="font-editorial italic font-normal text-white/50">Teixeira.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-14 leading-relaxed font-light"
        >
          A construir pontes entre bases de dados rigorosas e o design de interfaces disruptivas.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="flex gap-6"
        >
          <Link to="/about" className="inline-flex items-center justify-center border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 uppercase tracking-[0.2em] text-xs hover:border-white/60 hover:bg-white/10 transition-all duration-500 font-bold group">
            Ler Manifesto 
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;