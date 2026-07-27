import React from "react";

import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";


export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        m-0
        p-0
        bg-black
        text-white
        overflow-hidden
      "
    >
      {/* =============================================
          SECTION HEADING
      ============================================= */}

      <div
        className="
          w-full
          bg-black

          pt-6
          sm:pt-8
          lg:pt-12

          pb-6
          sm:pb-8
        "
      >
        <h2
          className="
            text-center

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold

            bg-clip-text
            text-transparent

            bg-gradient-to-r
            from-[#1cd8d2]
            via-[#00bf8f]
            to-[#302b63]
          "
        >
          My Projects
        </h2>
      </div>


      {/* =============================================
          PROJECTS
      ============================================= */}

      <div className="w-full m-0 p-0">

        {projects.map((project, index) => (

          <article
            key={project.title}
            style={{
              backgroundColor: project.bgColor,
            }}
            className="
              relative
              w-full
              m-0

              py-8
              sm:py-12
              lg:py-16

              overflow-hidden
            "
          >

            {/* =====================================
                PROJECT NUMBER
            ===================================== */}

            <div
              className="
                w-full
                max-w-7xl

                mx-auto

                px-4
                sm:px-6
                lg:px-12
                xl:px-16

                mb-4
              "
            >
              <span
                className="
                  text-xs
                  sm:text-sm

                  uppercase
                  tracking-[0.25em]

                  text-white/50

                  font-medium
                "
              >
                Project {String(index + 1).padStart(2, "0")}
              </span>
            </div>


            {/* =====================================
                PROJECT CARD
            ===================================== */}

            <ProjectCard
              project={project}
              image={
                project.desktopImage ||
                project.mobileImage
              }
            />

          </article>

        ))}

      </div>

    </section>
  );
}