import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';

const Home = () => {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Hero />
      <ProjectGrid />
    </main>
  );
};

export default Home;