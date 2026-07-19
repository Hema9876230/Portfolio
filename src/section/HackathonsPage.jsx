import { motion } from "framer-motion";
import PageShell from "./PageShell";
import hacksagon from "../assets/hacksagon.jpeg";

const hackathons = [
  {
    icon: "🚀",
    title: "Hacksagon 2026 - Finalist",
    description:
      "Finalist in Hacksagon 2026, a national-level hackathon organized by IITM Gwalior. Developed an AI- and IoT-powered Smart Parking System using AI, Machine Learning, and IoT technologies.",
    link: hacksagon,
  },
  {
    icon: "💻",
    title: "Capgemini Buildathon",
    description:
      "Qualified among the Top 250 teams in the Capgemini Buildathon. Developed an AI Tutor using ReactJS and the ChatGPT API.",
  },
  {
    icon: "🏆",
    title: "Hacknova 2026 - 3rd Runner Up",
    description:
      "Won 3rd Runner Up at Hacknova 2026, organized by Learning Education Hub, Bhopal. Developed HealthUp, an AI-powered health monitoring system and diet plan generator.",
  },
];

export default function HackathonsPage() {
  return (
    <PageShell
      title="Hackathons"
      subtitle="Innovation challenges and buildathons I've taken part in"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {hackathons.map((item, index) => (
          <motion.div
            key={item.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="text-3xl mb-3">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-6">
              {item.description}
            </p>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-cyan-400 hover:underline"
              >
                View Details →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}