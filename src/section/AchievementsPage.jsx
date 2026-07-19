import { motion } from "framer-motion";
import PageShell from "./PageShell";

const achievements = [
  {
    icon: "🏆",
    title: "Academic Excellence",
    description:
      "Maintained strong academic performance throughout B.Tech in CSE (AI & ML).",
  },
  {
    icon: "💻",
    title: "DSA & Problem Solving",
    description:
      "Solved coding challenges on LeetCode, GeeksforGeeks, and HackerRank.",
  },
  {
    icon: "🤖",
    title: "AI & ML Projects",
    description:
      "Developed Resume Screening, Store Intelligence, and Smart Parking solutions using AI technologies.",
  },
  // Add more achievements here — same shape: { icon, title, description }
];

export default function AchievementsPage() {
  return (
    <PageShell
      title="Achievements"
      subtitle="Academic and technical milestones"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
