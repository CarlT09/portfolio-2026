import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black flex flex-col">
        <Navbar />
        
        {/* Aqui dentro é que as páginas trocam */}
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;