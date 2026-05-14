import { useState, useRef, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import FigmaCanvas from '../components/FigmaCanvas';
import BrandBookViewer from '../components/BrandBookViewer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState('theory');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!project?.coverVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !videoRef.current.paused) {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [project]);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  const renderEditorialContent = (blocks, legacyTitle, legacyContent) => {
    if (blocks && blocks.length > 0) {
      return blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return (
              <div key={index} className="max-w-3xl mb-12">
                {block.title && <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">{block.title}</h3>}
                <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">{block.value}</p>
              </div>
            );
          case 'image-body':
            return (
              <figure key={index} className="w-full mb-16 group cursor-zoom-in" onClick={() => setSelectedImage(block.value)}>
                <div className="relative overflow-hidden border border-white/10">
                   <img src={block.value} alt="" className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                {block.caption && <figcaption className="text-xs text-gray-500 mt-3 uppercase tracking-widest">{block.caption}</figcaption>}
              </figure>
            );
          case 'video-body':
            return (
              <figure key={index} className="w-full mb-16">
                <video 
                  src={block.value} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-auto border border-white/10" 
                />
                {block.caption && <figcaption className="text-xs text-gray-500 mt-3 uppercase tracking-widest">
                  {block.caption}
                </figcaption>}
              </figure>
            );
          case 'quote':
            return (
              <blockquote key={index} className="border-l-2 border-white pl-8 my-16 max-w-2xl italic text-2xl text-gray-200">
                "{block.value}"
              </blockquote>
            );
          default: return null;
        }
      });
    }
    if (legacyTitle || legacyContent) {
      return (
        <div className="max-w-3xl mb-12">
          <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">{legacyTitle}</h3>
          <p className="text-gray-400 leading-relaxed text-lg whitespace-pre-line">{legacyContent}</p>
        </div>
      );
    }
    return null;
  };

  if (!project) return <Navigate to="/" />;

  return (
    <main className="w-full py-24 bg-black text-white">
      
      {/* --- INÍCIO DO MODAL LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-full"
            >
              <img src={selectedImage} alt="Fullscreen" className="w-full h-auto max-h-[85vh] object-contain shadow-2xl border border-white/10" />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-gray-500 text-[10px] uppercase tracking-widest">
                Clicar em qualquer lado para fechar
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- FIM DO MODAL LIGHTBOX --- */}

      {/* SECCÃO 1: CABEÇALHO E HERO */}
      <div className="max-w-5xl mx-auto px-6 w-full">
        <Link to="/" className="inline-block mb-12 uppercase tracking-widest text-sm font-bold border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
          ← Voltar ao Index
        </Link>

        <header className="mb-16 border-b border-white/20 pb-16">
          {/* CONTAINER 70/30 */}
          <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-8 items-start mb-8">
            
            {/* COLUNA ESQUERDA (70%): Info e Título */}
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <p className="about-label text-xs uppercase tracking-widest text-gray-500">
                  Projeto Académico · {project.role} · {project.year}
                </p>
                
                {project.status === 'wip' && (
                  <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] border border-white/20 px-3 py-1 text-gray-300 bg-white/5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    Em Construção
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                {project.title}
              </h1>
            </div>

            {/* COLUNA DIREITA (30%): Logótipo do Projeto */}
            {project.logo && (
              <div className="flex justify-end items-center md:h-full pt-2">
                <img 
                  src={project.logo} 
                  alt={`Logo ${project.title}`} 
                  className="max-h-20 md:max-h-32 object-contain"
                />
              </div>
            )}
          </div>

          {/* SUBTÍTULO E LINKS SOCIAIS (Abaixo do bloco 70/30) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
            
            {project.socialLinks && (
              <div className="flex gap-4 text-xl">
                {project.socialLinks.instagram && (
                  <a href={project.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                    <i className="ri-instagram-line"></i>
                  </a>
                )}
                {project.socialLinks.linkedin && (
                  <a href={project.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
                    <i className="ri-linkedin-box-line"></i>
                  </a>
                )}
              </div>
            )}
          </div>
        </header>

        <section className="mb-24">
          {project.coverVideo ? (
            <figure>
              <video ref={videoRef} src={project.coverVideo} controls onClick={handleVideoClick} className="w-full aspect-video object-cover border border-white/30 cursor-pointer" />
              {project.videoCredits && <figcaption className="text-xs text-gray-500 uppercase tracking-widest mt-3 text-right">{project.videoCredits}</figcaption>}
            </figure>
          ) : (
            <img src={project.coverImage} alt={project.title} className="w-full aspect-video object-contain bg-[#050505] border border-white/10" />
          )}
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
          <div><span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Ano</span><strong className="font-medium">{project.year}</strong></div>
          <div className="col-span-1 md:col-span-2"><span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">O Meu Papel</span><strong className="font-medium">{project.role}</strong></div>
          <div><span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Equipa</span><strong className="font-medium">{project.team || 'Solo'}</strong></div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-white pb-2 inline-block">O Contexto</h2>
            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">{project.fullDescription}</p>
          </div>

          <div className="border border-white/30 p-8 h-fit bg-white/5">
            <h3 className="font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-4 text-xs">Links do Projeto</h3>
            <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
              {/* Links Técnicos */}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noreferrer" className="hover:underline flex justify-between group">
                  GitHub <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="hover:underline flex justify-between group">
                  Live Site <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              )}

              {/* Redes Sociais do Projeto (Movidas para aqui) */}
              {project.socialLinks?.instagram && (
                <a href={project.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:underline flex justify-between items-center group text-gray-400 hover:text-white transition-colors">
                  Instagram <i className="ri-instagram-line text-lg"></i>
                </a>
              )}
              {project.socialLinks?.linkedin && (
                <a href={project.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex justify-between items-center group text-gray-400 hover:text-white transition-colors">
                  LinkedIn <i className="ri-linkedin-box-line text-lg"></i>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* SECCÃO 2: MOTOR INTERATIVO E CONTEÚDO DINÂMICO */}
      {(project.brandBookImages?.length > 0 || project.canvasImages?.length > 0 || project.presentationImages?.length > 0 || project.theoryBlocks || project.practiceBlocks || project.theoryContent) && (
        <section className="w-full my-32 py-24 bg-[#050505] border-y border-white/5">
          <div className="w-full flex flex-col">
            
            {project.viewerType === 'hybrid' && (
              <div className="max-w-5xl mx-auto w-full px-6 mb-16">
                <div className="flex gap-12 border-b border-white/10 relative">
                  {['theory', 'practice'].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-xs font-bold uppercase tracking-[0.3em] transition-colors relative ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
                      {tab === 'theory' ? '01. Teoria' : '02. Prática'}
                      {activeTab === tab && <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="w-full">
                
                <div className="max-w-5xl mx-auto w-full px-6">
                  {activeTab === 'theory' 
                    ? renderEditorialContent(project.theoryBlocks, project.theoryTitle, project.theoryContent)
                    : renderEditorialContent(project.practiceBlocks, project.practiceTitle, project.practiceContent)
                  }
                </div>

                {activeTab === 'theory' && (
                  <div className="w-full mt-16">
                    {project.colors?.length > 0 && (
                      <div className="max-w-5xl mx-auto px-6 mb-16">
                        <p className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-8 text-center">— Paleta Cromática —</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-12 border-y border-white/5">
                          {project.colors.map((color, index) => (
                            <div key={index} className="flex flex-col items-center gap-4 group">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: color.hex }} />
                              <div className="text-center">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">{color.name}</p>
                                <p className="text-[9px] text-gray-500 font-mono mt-1 opacity-80">{color.hex}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.brandBookImages?.length > 0 && (
                      <div className="w-full mb-16">
                        {project.brandbookTitle && (
                          <div className="max-w-5xl mx-auto px-6 mb-8 text-center text-gray-500 text-[10px] uppercase tracking-[0.4em]">
                            — {project.brandbookTitle} —
                          </div>
                        )}
                        <BrandBookViewer images={project.brandBookImages} />
                      </div>
                    )}

                    {project.presentationImages?.length > 0 && (
                      <div className="w-full mb-16">
                        <div className="max-w-5xl mx-auto px-6 mb-8 text-center text-gray-500 text-[10px] uppercase tracking-[0.4em]">
                          — Documentação Visual —
                        </div>
                        <div className="max-w-5xl mx-auto px-6 w-full">
                          <FigmaCanvas images={project.presentationImages} />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'practice' && project.canvasImages?.length > 0 && (
                  <div className="w-full mt-16">
                    <div className="max-w-5xl mx-auto px-6 mb-8 text-center text-gray-500 text-[10px] uppercase tracking-[0.4em]">
                      — Layouts e Interfaces —
                    </div>
                    <div className="max-w-5xl mx-auto px-6 w-full">
                      <FigmaCanvas images={project.canvasImages} />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* SECCÃO 3: EQUIPA E GALERIA */}
      <div className="max-w-5xl mx-auto px-6">
        {project.teamMembers && project.teamMembers.length > 0 && (
          <section className="mb-32">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-12 border-b border-white/10 pb-4 inline-block">Equipa</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {project.teamMembers.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-white/10 group-hover:border-white/40 transition-colors bg-[#111] flex items-center justify-center">
                    <img src={member.photo} alt={member.name} className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold text-center">{member.name}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
            {project.galleryImages.map((img, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 0.98 }} 
                className="cursor-zoom-in" 
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt="" className="w-full aspect-square object-cover border border-white/10" />
              </motion.div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default ProjectDetail;