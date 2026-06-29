import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiPython,
  SiDocker,
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiGithub,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const skills = [
    { icon: <FaReact />, name: "React.js" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },

    { icon: <SiPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiTypescript />, name: "TypeScript" },

    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiDocker />, name: "Docker" },

    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },

    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
  ];

  const repeated = [...skills, ...skills];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onWheel = (e) => {
      setDir(e.deltaY > 0 ? -1 : 1);
    };

    const onTouchStart = (e) => {
      touchY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e) => {
      if (touchY.current == null) return;

      const delta = e.touches[0].clientY - touchY.current;

      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", onTouchMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  useEffect(() => {
    let frame;
    let last = performance.now();

    const SPEED = 80;

    const animate = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + SPEED * dir * dt;

      const loopWidth =
        trackRef.current?.scrollWidth / 2 || 0;

      if (loopWidth) {
        if (next <= -loopWidth) next += loopWidth;
        if (next >= 0) next -= loopWidth;
      }

      x.set(next);

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [dir, x]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="w-full py-20 bg-black text-white overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-0
          w-[300px] h-[300px]
          rounded-full
          bg-gradient-to-r
          from-[#302b63]
          via-[#00bf8f]
          to-[#1cd8d2]
          opacity-20
          blur-[120px]"
        />

        <div
          className="absolute bottom-1/4 right-0
          w-[300px] h-[300px]
          rounded-full
          bg-gradient-to-r
          from-[#302b63]
          via-[#00bf8f]
          to-[#1cd8d2]
          opacity-20
          blur-[120px]"
        />
      </div>

      <div className="relative z-10">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-bold
          bg-clip-text text-transparent
          bg-gradient-to-r
          from-[#1cd8d2]
          via-[#00bf8f]
          to-[#302b63]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.p
          className="text-center mt-4 mb-12 text-white/80 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building intelligent applications with modern web technologies,
          AI/ML tools, and scalable backend systems.
        </motion.p>

        <div className="relative w-full overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-10"
            style={{
              x,
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            {repeated.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center
                min-w-[130px]
                gap-3
                p-4
                rounded-2xl
                bg-white/5
                border border-white/10
                backdrop-blur-md"
              >
                <span className="text-6xl text-[#1cd8d2] hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>

                <p className="text-sm text-white/90">
                  {skill.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

