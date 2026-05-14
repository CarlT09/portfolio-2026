import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

// Variantes para a animação em cascata
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

const ProjectGrid = () => {
  return (
    <section id="projetos" className="mb-40 relative z-10">
      <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
        <h2 className="text-3xl font-bold uppercase tracking-widest">
          Index_
          <span className="font-editorial italic font-normal text-gray-500 lowercase">Projetos</span>
        </h2>
        <span className="text-xs tracking-[0.3em] uppercase text-gray-600 hidden md:inline-block">
          {projectsData.length} Trabalhos Catalogados
        </span>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectGrid;