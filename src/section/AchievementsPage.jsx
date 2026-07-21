import { motion } from "framer-motion";
import PageShell from "./PageShell";

import gfg160Certificate from "../assets/gfg160.jpeg";
import academicExcellence from "../assets/sem.jpeg";
import summerAnalyticsCertificate from "../assets/sumanalytics.jpeg";
import bigCodeCertificate from "../assets/bigcode.jpeg";

const achievements = [
  {
  icon: "🚀",
  title: "The Big Code 2026 – Google",
  description:
    "Successfully cleared the Qualifier Round of Google’s The Big Code 2026 competition, securing a position among the Top 15,000 participants and advancing to Round 1 by demonstrating strong programming and problem-solving skills.",
  link: bigCodeCertificate,
},
  {
    icon: "🎓",
    title: "Academic Excellence – SGPA 8.6",
    description:
      "Recognized by the Department of Computer Science & Engineering (AI & ML), IES College of Technology, Bhopal, for outstanding academic performance by securing an SGPA of 8.6 in RGPV B.Tech III Semester 2025.",
    link: academicExcellence,
  },
  {
    icon: "💻",
    title: "GeeksforGeeks 160 Days of Problem Solving",
    description:
      "Successfully completed the 22-week GeeksforGeeks 160 Days of Problem Solving program, strengthening skills in Data Structures & Algorithms, coding techniques, and interview preparation through consistent practice and workshops.",
    link: gfg160Certificate,
  },
  {
    icon: "📊",
    title: "Summer Analytics 2025 – Certificate of Merit",
    description:
      "Successfully completed the six-week Summer Analytics 2025 program organized by the Consulting & Analytics Club, IIT Guwahati. Earned a Certificate of Merit by finishing in the Top 25 percentile while gaining hands-on experience in Data Science, Machine Learning, Python, and analytical problem-solving.",
    link: summerAnalyticsCertificate,
  },
  // Add more achievements here
];

export default function AchievementsPage() {
  return (
    <PageShell
      title="Achievements"
      subtitle="Academic and technical milestones"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 cursor-pointer h-full">
              <div className="text-3xl mb-3">{item.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.description}
              </p>

              <div className="mt-4 text-cyan-400 text-sm font-medium">
                View Achievement →
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}