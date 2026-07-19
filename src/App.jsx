import { Routes, Route } from 'react-router-dom';

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

import HackathonsPage from './section/HackathonsPage';
import CertificationsPage from './section/CertificationsPage';
import AchievementsPage from './section/AchievementsPage';
import ExtracurricularPage from './section/ExtracurricularPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Achievement />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor />
      {/*<ParticlesBackground/>*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/extracurricular" element={<ExtracurricularPage />} />
      </Routes>
    </div>
  );
}