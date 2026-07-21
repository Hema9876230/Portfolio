import { motion } from "framer-motion";
import PageShell from "./PageShell";

import ideathonCertificate from "../assets/ideathon.jpeg";
import yuvaCertificate from "../assets/Yuva.jpeg";
import pragyanCertificate from "../assets/manigma.jpeg";

const extracurricular = [
  {
    icon: "💡",
    title: "Ideat-A-Thon 2025",
    description:
      "Participated in Ideat-A-Thon 2025, presenting innovative technology-driven ideas and collaborating with peers to solve real-world challenges. Enhanced skills in ideation, presentation, teamwork, and problem-solving.",
    link: ideathonCertificate,
  },
  {
    icon: "🌱",
    title: "CII-Yi Bhopal Future 5.0 – Climate Change",
    description:
      "Participated in the CII-Yi Bhopal Future 5.0 event organized by the Confederation of Indian Industry (CII) and Young Indians (Yi). Contributed innovative ideas on the theme of Climate Change, promoting sustainability, environmental awareness, and collaborative problem-solving.",
    link: yuvaCertificate,
  },
  {
    icon: "🛠️",
    title: "Organizer – Costovate Hardware Innovation Challenge",
    description:
      "Organized the Costovate Hardware Innovation Challenge at IES College of Technology, coordinating event planning, participant management, and technical activities while promoting innovation, teamwork, and hardware-based problem-solving.",
    link: null, // No certificate available
  },
  {
  icon: "🎯",
  title: "Pragyan 2025 – NIT Tiruchirappalli",
  description:
    "Participated in Pragyan 2025, the international techno-managerial festival of NIT Tiruchirappalli, competing in the 'Superhero Callcenter (Manigma)' event. Enhanced communication, teamwork, critical thinking, and problem-solving skills through a competitive national-level platform.",
  link: pragyanCertificate,
},
];

export default function ExtracurricularPage() {
  return (
    <PageShell
      title="Extracurricular"
      subtitle="Activities and involvement outside academics"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {extracurricular.map((item, index) => (
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
                View Certificate →
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}