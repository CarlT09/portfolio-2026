import { Link } from 'react-router-dom';

const Navbar = () => {
  // Adicionei z-50 e relative para garantir que a navbar fica sempre por cima de tudo
  return (
    <nav className="border-b border-white/20 p-6 flex justify-between items-center relative z-50">
      
      <Link to="/" className="w-32 block">
        <img 
          src="/logo.svg" 
          alt="CRLS+OS" 
          className="w-full invert transition-opacity hover:opacity-80" 
          onError={(e) => {
            e.target.style.display='none';
            e.target.nextSibling.style.display='block';
          }} 
        />
        <span className="hidden font-bold tracking-widest text-xl">CRLS+OS</span>
      </Link>
      
      <div className="space-x-8 text-sm uppercase tracking-widest hidden md:block">
        <Link to="/#projetos" className="hover:text-gray-400 transition-colors">
          Index_Projetos
        </Link>
        
        <Link to="/about" className="hover:text-gray-400 transition-colors">
          Manifesto_About
        </Link>
        
        <a href="/#contactos" className="hover:text-gray-400 transition-colors">
          Contactos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;