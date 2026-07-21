import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { projects } from "./projectsData";
import { useIsMobile } from "./hooks";
import ProjectCard from "./ProjectCard";
import { useScroll } from "framer-motion";

/**
 * Scroll-driven "scrollytelling" section: the user scrolls through a tall
 * container, and each screen-height segment activates the corresponding
 * project card while the section background color transitions to match.
 */
export default function Projects() {
  const isMobile = useIsMobile();
  const sceneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => projects.map((_, index) => (index + 1) / projects.length),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const nextIndex = thresholds.findIndex((t) => progress <= t);
      setActiveIndex(nextIndex === -1 ? thresholds.length - 1 : nextIndex);
    });

    return unsubscribe;
  }, [scrollYProgress, thresholds]);

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={sceneRef}
      className="relative text-white"
      style={{
        height: `${projects.length * 100}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color .4s ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
          My Projects
        </h2>

        <div className="relative flex-1 flex items-center justify-center">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const image = isMobile ? project.mobileImage : project.desktopImage;

            return (
              <div
                key={project.title}
                aria-hidden={!isActive}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                  isActive ? "opacity-100 z-20" : "opacity-0 pointer-events-none"
                }`}
              >
                <AnimatePresence mode="wait">
                  {isActive && <ProjectCard project={project} image={image} />}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
