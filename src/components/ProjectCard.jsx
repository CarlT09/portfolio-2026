import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <article className="border border-white/30 p-6 flex flex-col justify-between hover:border-white transition-colors group relative">
      <div>
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold">
            <Link to={`/projeto/${project.id}`} className="hover:underline underline-offset-4">
              {project.title}
            </Link>
          </h3>
          
          {/* TAG WORK IN PROGRESS */}
          {project.status === 'wip' && (
            <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] border border-white/20 px-2 py-1 text-gray-400 bg-white/5 whitespace-nowrap mt-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></span>
              Em Construção
            </span>
          )}
        </div>

        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map((tag, index) => (
            <span key={index} className="text-xs border border-white/50 px-2 py-1 uppercase tracking-wider">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4 text-sm font-bold uppercase tracking-widest">
        <Link to={`/projeto/${project.id}`} className="hover:underline underline-offset-4 text-white group-hover:text-white transition-colors">
          Ler Case Study →
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;