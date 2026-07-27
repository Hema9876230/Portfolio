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

  /* ======================================================
     SKILLS DATA
  ====================================================== */

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

  // Duplicate for seamless infinite scrolling
  const repeatedSkills = [...skills, ...skills];


  /* ======================================================
     STATE / REFS
  ====================================================== */

  const [direction, setDirection] = useState(-1);
  const [active, setActive] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);

  const x = useMotionValue(0);


  /* ======================================================
     DETECT IF SKILLS SECTION IS VISIBLE
  ====================================================== */

  useEffect(() => {

    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();

  }, []);


  /* ======================================================
     CHANGE DIRECTION WITH USER SCROLL
  ====================================================== */

  useEffect(() => {

    if (!active) return;

    const handleWheel = (event) => {

      if (event.deltaY > 0) {
        setDirection(-1);
      } else {
        setDirection(1);
      }

    };


    const handleTouchStart = (event) => {

      touchY.current =
        event.touches[0].clientY;

    };


    const handleTouchMove = (event) => {

      if (touchY.current === null) return;

      const currentY =
        event.touches[0].clientY;

      const delta =
        currentY - touchY.current;

      if (delta > 0) {
        setDirection(1);
      } else {
        setDirection(-1);
      }

      touchY.current = currentY;

    };


    window.addEventListener(
      "wheel",
      handleWheel,
      { passive: true }
    );

    window.addEventListener(
      "touchstart",
      handleTouchStart,
      { passive: true }
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );


    return () => {

      window.removeEventListener(
        "wheel",
        handleWheel
      );

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

    };

  }, [active]);


  /* ======================================================
     INFINITE MARQUEE ANIMATION
  ====================================================== */

  useEffect(() => {

    let animationFrame;

    let lastTime =
      performance.now();

    const SPEED = 55;


    const animate = (currentTime) => {

      const deltaTime =
        (currentTime - lastTime) / 1000;

      lastTime = currentTime;


      let nextPosition =
        x.get() +
        SPEED *
        direction *
        deltaTime;


      const track =
        trackRef.current;


      if (track) {

        const loopWidth =
          track.scrollWidth / 2;


        if (loopWidth > 0) {

          if (
            nextPosition <=
            -loopWidth
          ) {
            nextPosition += loopWidth;
          }


          if (
            nextPosition >= 0
          ) {
            nextPosition -= loopWidth;
          }

        }

      }


      x.set(nextPosition);


      animationFrame =
        requestAnimationFrame(
          animate
        );

    };


    animationFrame =
      requestAnimationFrame(
        animate
      );


    return () =>
      cancelAnimationFrame(
        animationFrame
      );

  }, [direction, x]);


  /* ======================================================
     UI
  ====================================================== */

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        relative
        w-full

        m-0

        bg-black
        text-white

        overflow-hidden

        pt-12
        sm:pt-16
        lg:pt-20

        pb-6
        sm:pb-8
        lg:pb-10
      "
    >

      {/* ==================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
        "
      >

        {/* LEFT GLOW */}

        <div
          className="
            absolute

            top-1/4
            -left-20

            w-[220px]
            h-[220px]

            sm:w-[300px]
            sm:h-[300px]

            rounded-full

            bg-gradient-to-r
            from-[#302b63]
            via-[#00bf8f]
            to-[#1cd8d2]

            opacity-20

            blur-[100px]
            sm:blur-[120px]
          "
        />


        {/* RIGHT GLOW */}

        <div
          className="
            absolute

            bottom-0
            -right-20

            w-[220px]
            h-[220px]

            sm:w-[300px]
            sm:h-[300px]

            rounded-full

            bg-gradient-to-r
            from-[#302b63]
            via-[#00bf8f]
            to-[#1cd8d2]

            opacity-20

            blur-[100px]
            sm:blur-[120px]
          "
        />

      </div>


      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10
          w-full
        "
      >

        {/* TITLE */}

        <motion.h2
          className="
            text-center

            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold

            px-4

            bg-clip-text
            text-transparent

            bg-gradient-to-r
            from-[#1cd8d2]
            via-[#00bf8f]
            to-[#302b63]
          "
          initial={{
            opacity: 0,
            y: -25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Technical Skills
        </motion.h2>


        {/* DESCRIPTION */}

        <motion.p
          className="
            text-center

            max-w-2xl

            mx-auto

            mt-4

            mb-7
            sm:mb-9

            px-5

            text-sm
            sm:text-base

            leading-6
            sm:leading-7

            text-white/80
          "
          initial={{
            opacity: 0,
            y: -15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          Building intelligent applications with modern web
          technologies, AI/ML tools, and scalable backend
          systems.
        </motion.p>


        {/* ==================================================
            SKILLS MARQUEE
        ================================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >

          {/* LEFT FADE */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0

              z-20

              w-5
              sm:w-14

              pointer-events-none

              bg-gradient-to-r
              from-black
              to-transparent
            "
          />


          {/* RIGHT FADE */}

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0

              z-20

              w-5
              sm:w-14

              pointer-events-none

              bg-gradient-to-l
              from-black
              to-transparent
            "
          />


          {/* MOVING TRACK */}

          <motion.div
            ref={trackRef}
            className="
              flex
              w-max

              gap-4
              sm:gap-6
              lg:gap-8

              px-2
            "
            style={{
              x,
              willChange: "transform",
            }}
          >

            {repeatedSkills.map(
              (skill, index) => (

                <motion.div
                  key={`${skill.name}-${index}`}
                  className="
                    flex
                    flex-col

                    items-center
                    justify-center

                    shrink-0

                    min-w-[105px]
                    h-[115px]

                    sm:min-w-[125px]
                    sm:h-[135px]

                    lg:min-w-[140px]
                    lg:h-[150px]

                    gap-2
                    sm:gap-3

                    p-3
                    sm:p-4

                    rounded-2xl

                    bg-white/5

                    border
                    border-white/10

                    backdrop-blur-md
                  "
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >

                  {/* ICON */}

                  <span
                    className="
                      flex
                      items-center
                      justify-center

                      text-4xl
                      sm:text-5xl
                      lg:text-6xl

                      text-[#1cd8d2]
                    "
                  >
                    {skill.icon}
                  </span>


                  {/* SKILL NAME */}

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-center

                      text-white/90

                      whitespace-nowrap
                    "
                  >
                    {skill.name}
                  </p>

                </motion.div>

              )
            )}

          </motion.div>

        </div>

      </div>

    </section>
  );
}