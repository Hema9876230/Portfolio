import { motion } from "framer-motion";
import PageShell from "./PageShell";

// No extracurricular data was provided yet — fill this array in with your
// clubs, volunteering, sports, leadership roles, etc.
const extracurricular = [
  {
    icon: "🎯",
    title: "Add your activity",
    description: "Describe the club, role, or activity here.",
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
