import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

// Main Sections
import Home from "./section/Home";
import About from "./section/About";
import Skill from "./section/Skill";
import Projects from "./section/Projects";
import Achievement from "./section/Achievement";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

// Detail Pages
import HackathonsPage from "./section/HackathonsPage";
import CertificationsPage from "./section/CertificationsPage";
import AchievementsPage from "./section/AchievementsPage";
import ExtracurricularPage from "./section/ExtracurricularPage";


/* =========================================================
   HOME PAGE
========================================================= */

function HomePage() {
  return (
    <main
      className="
        w-full
        min-h-screen
        m-0
        p-0
        bg-black
        text-white
        overflow-x-hidden
      "
    >
      <Navbar />

      <Home />

      <About />

      <Skill />

      <Projects />

      <Achievement />

      <Contact />

      <Footer />
    </main>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        m-0
        p-0
        bg-black
        text-white
        overflow-x-hidden
      "
    >
      {/* Custom mouse cursor */}
      <CustomCursor />

      <Routes>
        {/* Main Portfolio */}
        <Route
          path="/"
          element={<HomePage />}
        />

        {/* Hackathons */}
        <Route
          path="/hackathons"
          element={<HackathonsPage />}
        />

        {/* Certifications */}
        <Route
          path="/certifications"
          element={<CertificationsPage />}
        />

        {/* Achievements */}
        <Route
          path="/achievements"
          element={<AchievementsPage />}
        />

        {/* Extracurricular */}
        <Route
          path="/extracurricular"
          element={<ExtracurricularPage />}
        />
      </Routes>
    </div>
  );
}