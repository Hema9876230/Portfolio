import React from "react";
import { motion } from "framer-motion";

const CARD_MOTION = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.5 },
};

function TechBadge({ label }) {
  return (
    <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
      {label}
    </span>
  );
}

function FeatureItem({ label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-white" />
      <p className="text-white/90">{label}</p>
    </div>
  );
}

export default function ProjectCard({ project, image }) {
  const {
    title,
    description,
    tech,
    features,
    githubLink,
  } = project;

  return (
    <motion.div
      key={title}
      {...CARD_MOTION}
      className="w-full max-w-7xl px-6 lg:px-16"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT SIDE ================= */}

        <div>
          <motion.h3 className="text-5xl lg:text-6xl font-bold mb-8">
            {title}
          </motion.h3>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 group">
            {/* Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-[420px] object-contain transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />

            {/* GitHub Button */}
            <div className="absolute bottom-6 left-6">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-lg bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div>
          <h3 className="text-3xl font-bold mb-5">
            About Project
          </h3>

          <p className="text-white/90 text-lg leading-8">
            {description}
          </p>

          {/* Tech Stack */}

          <h4 className="text-2xl font-semibold mt-10 mb-4">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-3">
            {tech.map((item) => (
              <TechBadge
                key={item}
                label={item}
              />
            ))}
          </div>

          {/* Features */}

          <h4 className="text-2xl font-semibold mt-10 mb-4">
            Key Features
          </h4>

          <div className="space-y-3">
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