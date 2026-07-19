import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Shared shell for the Hackathons / Certifications / Achievements /
// Extracurricular detail pages. Keeps the background glow, back button,
// and heading style identical to the main Achievement section.
export default function PageShell({ title, subtitle, children }) {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 py-20">
        <button
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
        >
          ← Back
        </button>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            className="text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {subtitle}
          </motion.p>
        )}

        {children}
      </div>
    </section>
  );
}
