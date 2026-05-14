import { useParams, Link, Navigate } from 'react-router-dom';
import FigmaCanvas from '../components/FigmaCanvas';
import { projectsData } from '../data/projects';

const PresentationPage = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <Navigate to="/" />;

  // Vai buscar as imagens ao ficheiro projects.js
  const presentationImages = project.presentationImages || [];

  // Proteção: Se clicares no botão de um projeto que não tem PDF configurado
  if (presentationImages.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center flex-col text-white">
        <p className="uppercase tracking-widest text-sm text-gray-500 mb-6">Apresentação não disponível para este projeto.</p>
        <Link to={`/projeto/${id}`} className="border border-white px-6 py-2 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors">
          Voltar ao Projeto
        </Link>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col overflow-hidden">
      <header className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center pointer-events-none">
        <h1 className="font-bold uppercase tracking-widest text-sm text-gray-400 bg-black/50 px-4 py-2 border border-white/10 backdrop-blur-sm pointer-events-auto">
          Canvas: <span className="text-white">{project.title}</span>
        </h1>
        <Link 
          to={`/projeto/${id}`} 
          className="text-sm uppercase tracking-widest border border-white bg-black px-6 py-3 hover:bg-white hover:text-black transition-colors pointer-events-auto"
        >
          ✕ Fechar
        </Link>
      </header>

      <FigmaCanvas images={presentationImages} />
    </div>
  );
};

export default PresentationPage;