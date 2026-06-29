import { motion } from "framer-motion";

export default function Achievement() {
const items = [
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
icon: "🚀",
title: "Hackathon Participation",
description:
"Participated in Purplle Tech Challenge, Capgemini Buildathon, Summer Analytics, and other innovation competitions.",
},
{
icon: "🤖",
title: "AI & ML Projects",
description:
"Developed Resume Screening, Store Intelligence, and Smart Parking solutions using AI technologies.",
},
/*{
icon: "☁️",
title: "Microsoft Azure Fundamentals",
description:
"Certified in cloud computing fundamentals and Microsoft Azure services.",
},
{
icon: "🧠",
title: "Google TensorFlow Program",
description:
"Completed TensorFlow learning program focused on deep learning and AI development.",
},*/
{
icon: "🐍",
title: "Python for Data Science",
description:
"NPTEL certification covering Python, data analysis, and machine learning fundamentals.",
},
{
  icon: "🗄️",
  title: "Database Management System (DBMS)",
  description:
    "Certified in Database Management Systems, covering SQL, database design, normalization, ER modeling, transactions, and query optimization.",
     link: "dbms-certificate.jpg",
},
];

return ( <section
   id="achievement"
   className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
   aria-label="Achievement"
 >
{/* Background Glow */} <div className="absolute inset-0 pointer-events-none"> <div className="absolute -top-10 -left-10 w-[360px] h-[360px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1CD8D2] opacity-20 blur-[120px] animate-pulse" /> <div className="absolute bottom-0 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63] opacity-15 blur-[140px] animate-pulse delay-300" /> <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 w-[220px] h-[220px] rounded-full bg-gradient-to-r from-[#00bf8f] to-[#1CD8D2] opacity-10 blur-[100px]" /> </div>

```
  <div className="relative z-10 max-w-6xl w-full mx-auto px-6 py-20">
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#00bf8f] to-[#302b63]"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      Achievements & Certifications
    </motion.h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-4xl mb-4">{item.icon}</div>

          <h3 className="text-xl font-semibold mb-3">
            {item.title}
          </h3>

          <p className="text-gray-400">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
}
