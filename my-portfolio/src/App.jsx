import Navbar from './components/Navbar';
import Home from './section/Home';
import About from './section/About';
import Skill from './section/Skill';
import Projects from './section/Projects';
import Experience from './section/Experience';
import Testimonial from './section/Testimonial';
import Contact from './section/Contact';
import Footer from './section/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor />
     <ParticlesBackground/>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}