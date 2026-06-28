import Navbar from './components/Navbar';
import Home from './section/Home';
import About from './section/About';
import Skill from './section/Skill';
import Projects from './section/Projects';
import Achievement from './section/Achievement';
import Contact from './section/Contact';
import Footer from './section/Footer';
//import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor />
    {/*<ParticlesBackground/>*/}
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Achievement />
      <Contact />
      <Footer />
    </div>
  );
}