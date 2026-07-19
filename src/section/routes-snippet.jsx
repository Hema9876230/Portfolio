// Add these routes wherever your <Routes> live (e.g. App.jsx).
// Adjust the import paths to match where you place the page files.

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Achievement from "./Achievement";
import HackathonsPage from "./HackathonsPage";
import CertificationsPage from "./CertificationsPage";
import AchievementsPage from "./AchievementsPage";
import ExtracurricularPage from "./ExtracurricularPage";

// If your app already has a BrowserRouter/Routes at the root (likely),
// just add these four <Route> lines into it — don't nest another Router.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ...your existing routes... */}
        <Route path="/" element={<Achievement />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/extracurricular" element={<ExtracurricularPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
