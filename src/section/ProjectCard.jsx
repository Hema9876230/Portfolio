import React from "react";
import { motion } from "framer-motion";

const CARD_MOTION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.45 },
};

function TechBadge({ label }) {
  return (
    <span
      className="
        px-3 py-1.5
        sm:px-4 sm:py-2
        rounded-full
        bg-white/20
        backdrop-blur-sm
        text-white
        text-xs sm:text-sm
        font-medium
        whitespace-nowrap
      "
    >
      {label}
    </span>
  );
}

function FeatureItem({ label }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 mt-2 shrink-0 rounded-full bg-white" />

      <p className="text-white/90 text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function ProjectCard({ project, image }) {
  const {
    title,
    description,
    tech = [],
    features = [],
    githubLink,
  } = project;

  return (
    <motion.div
      key={title}
      {...CARD_MOTION}
      className="
        w-full
        max-w-7xl
        mx-auto
        px-4
        sm:px-6
        lg:px-16
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
          sm:gap-8
          lg:gap-16
          items-center
        "
      >
        {/* LEFT SIDE */}
        <div className="w-full min-w-0">

          {/* Project Title */}
          <motion.h3
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-bold
              mb-4
              sm:mb-6
              lg:mb-8
            "
          >
            {title}
          </motion.h3>

          {/* Project Image */}
          <div
            className="
              relative
              w-full
              rounded-2xl
              overflow-hidden
              shadow-2xl
              bg-black/20
              group
            "
          >
            <img
              src={image}
              alt={title}
              className="
                w-full
                h-[300px]
                sm:h-[360px]
                lg:h-[420px]
                object-contain
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/20
                group-hover:bg-black/40
                transition
                duration-300
                pointer-events-none
              "
            />

            {/* GitHub Button */}
            {githubLink && (
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  sm:bottom-6
                  sm:left-6
                  z-10
                "
              >
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    px-4 py-2
                    sm:px-5 sm:py-3
                    rounded-lg
                    bg-white
                    text-black
                    text-sm
                    sm:text-base
                    font-semibold
                    shadow-lg
                    hover:bg-gray-200
                    transition
                  "
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full min-w-0">

          {/* About */}
          <h3
            className="
              text-2xl
              sm:text-3xl
              font-bold
              mb-3
              sm:mb-5
            "
          >
            About Project
          </h3>

          <p
            className="
              text-white/90
              text-sm
              sm:text-base
              lg:text-lg
              leading-6
              sm:leading-7
              lg:leading-8
            "
          >
            {description}
          </p>

          {/* Tech Stack */}
          <h4
            className="
              text-xl
              sm:text-2xl
              font-semibold
              mt-6
              lg:mt-10
              mb-3
              sm:mb-4
            "
          >
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tech.map((item) => (
              <TechBadge
                key={item}
                label={item}
              />
            ))}
          </div>

          {/* Features */}
          <h4
            className="
              text-xl
              sm:text-2xl
              font-semibold
              mt-6
              lg:mt-10
              mb-3
              sm:mb-4
            "
          >
            Key Features
          </h4>

          <div className="space-y-2 sm:space-y-3">
            {features.map((item) => (
              <FeatureItem
                key={item}
                label={item}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}