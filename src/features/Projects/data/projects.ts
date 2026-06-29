export interface Project {
  title: string;
  description: string;
  features?: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "GanttFlow",
    description:
      "A modern web-based project management tool that visualizes tasks in a Gantt-style timeline. It allows users to track, organize, and manage project schedules in a clean and interactive UI.",
    features: [
      "Interactive Gantt chart timeline",
      "Task scheduling and visualization",
      "Clean dashboard UI for project planning",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://gantt-flow-eta.vercel.app/",
    githubUrl: "https://github.com/TamerSameh/GanttFlow",
    gradient: "linear-gradient(135deg, #64FFDA25, #0a1628)",
  },
  {
    title: "Meridian Portfolio",
    description:
      "A premium minimal portfolio built with React, TypeScript, and Vite.",
    tags: ["React", "TypeScript", "Vite", "CSS Modules"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "linear-gradient(135deg, #64FFDA20, #09090B80)",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Full-featured admin panel with real-time analytics and order management.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "linear-gradient(135deg, #7C3AED20, #09090B80)",
  },
];
