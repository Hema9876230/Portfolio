import { motion } from "framer-motion";
import PageShell from "./PageShell";
import dbmsCertificate from "../assets/dbms-certificate.pdf";
import nptelCertificate from "../assets/pythondatascience.pdf";

const certifications = [
  {
    icon: "🐍",
    title: "Python for Data Science",
    description:
      "NPTEL certification covering Python, data analysis, and machine learning fundamentals.",
    link: nptelCertificate,
  },
  {
    icon: "🗄️",
    title: "Database Management System (DBMS)",
    description:
      "Covers SQL, database design, normalization, ER modeling, transactions, and query optimization.",
    link: dbmsCertificate,
  },
  // Uncomment / add as needed:
  // {
  //   icon: "☁️",
  //   title: "Microsoft Azure Fundamentals",
  //   description: "Certified in cloud computing fundamentals and Microsoft Azure services.",
  // },
  // {
  //   icon: "🧠",
  //   title: "Google TensorFlow Program",
  //   description: "Completed TensorFlow learning program focused on deep learning and AI development.",
  // },
];

export default function CertificationsPage() {
  return (
    <PageShell
      title="Certifications"
      subtitle="Formal courses and certifications I've completed"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((item, index) => (
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
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-xs text-cyan-400 hover:underline"
              >
                View certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
