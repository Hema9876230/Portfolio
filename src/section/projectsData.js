import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";

/**
 * Static project data.
 * `desktopImage` / `mobileImage` are provided separately so the
 * consuming component can pick the right one based on viewport,
 * without embedding that logic in the data itself.
 */
export const projects = [
  {
    title: "Guardian-AI",
    githubLink: "https://github.com/Hema9876230/Guardian-AI",
    demoLink: "https://github.com/Hema9876230/Guardian-AI",
    bgColor: "#0d4d3d",
    desktopImage: img1,
    mobileImage: photo1,
    description:
      "Guardian-AI is an AI-powered career assistant that helps students prepare for placements. It provides resume analysis, ATS score, interview preparation, career roadmap generation, and AI-powered career guidance.",
    tech: ["React", "FastAPI", "SQLite", "JWT", "Ollama", "Docker"],
    features: [
      "AI Resume Analyzer",
      "ATS Resume Score",
      "Interview Question Generator",
      "Career Roadmap",
      "Authentication",
      "Responsive Dashboard",
    ],
  },
  {
    title: "Store Intelligence System",
    githubLink: "https://github.com/Hema9876230/Store-Intelligence",
    demoLink: "https://github.com/Hema9876230/Store-Intelligence",
    bgColor: "#dc9317",
    desktopImage: img3,
    mobileImage: photo3,
    description:
      "An AI-powered retail analytics system that uses YOLOv8 to track customer movement, generate store insights, analyze footfall, and visualize heatmaps for smarter business decisions.",
    tech: ["Python", "FastAPI", "YOLOv8", "SQLite", "Streamlit", "OpenCV"],
    features: [
      "Customer Tracking",
      "Store Heatmaps",
      "Footfall Analytics",
      "Sales Dashboard",
      "Live Detection",
      "Business Reports",
    ],
  },
  {
    title: "HealthUp",
    githubLink: "https://github.com/Hema9876230/Heathup",
    demoLink: "https://github.com/Hema9876230/Heathup",
    bgColor: "#3884d3",
    desktopImage: img2,
    mobileImage: photo2,
    description:
  "Smart Workout Planner is a full-stack MERN application that helps users create, organize, and track personalized workout routines. It features a responsive dashboard, REST API integration, and MongoDB-based data management for an efficient fitness planning experience.",

tech: [
  "React.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Axios"
],
features: [
  "Create & Manage Workout Plans",
  "Workout Tracking Dashboard",
  "REST API Integration",
  "Responsive User Interface",
  "MongoDB Database Integration",
  "Scalable MERN Architecture"
    ],
  },
];
