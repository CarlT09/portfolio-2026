const Footer = () => {
  return (
    <footer id="contactos" className="border-t border-white/20 p-8 text-center text-sm text-gray-400 mt-auto">
      <div className="flex justify-center gap-8 mb-6 uppercase tracking-widest font-bold flex-wrap">
        <a href="https://github.com/CarlT09" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/carlos-teixeira-1b10bb345/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="/cv_carlos_teixeira.pdf" target="_blank" className="hover:text-white transition-colors border-b border-gray-400 hover:border-white pb-1">Download CV</a>
      </div>
      <p className="tracking-widest">© 2026 CRLS+OS.</p>
    </footer>
  );
};

export default Footer;