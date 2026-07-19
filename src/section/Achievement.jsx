import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Achievement() {
  const navigate = useNavigate();

  const categories = [
    {
      icon: "🚀",
      title: "Hackathons",
      description:
        "Partcipated in hackathons for exploring innovative solutions and building projects with AI, ML, and IoT.",
      count: "4+ events",
      path: "/hackathons",
    },
    {
      icon: "📜",
      title: "Certifications",
      description:
        "NPTEL, DBMS, and other technical certifications across data and AI.",
      count: "2+ certs",
      path: "/certifications",
    },
    {
      icon: "🏆",
      title: "Achievements",
      description:
        "Academic excellence, DSA problem solving, and AI/ML project milestones.",
      count: "4+ highlights",
      path: "/achievements",
    },
    {
      icon: "🎯",
      title: "Extracurricular",
      description:
        "Clubs, volunteering, leadership roles, and activities outside academics.",
      count: "View all",
      path: "/extracurricular",
    },
  ];

  return (
    <section
      id="achievement"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
      aria-label="Achievement"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Achievements & Certifications
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Explore each category for the full breakdown
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.title}
              onClick={() => navigate(cat.path)}
              className="group text-left p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">{cat.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>

              <p className="text-gray-400 text-sm mb-4">{cat.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-cyan-400/80">
                  {cat.count}
                </span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
