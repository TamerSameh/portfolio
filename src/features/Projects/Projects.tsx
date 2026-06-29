import { useRef, useEffect, useState } from "react";
import styles from "./Projects.module.css";

const project = {
  title: "GanttFlow",
  description:
    "A modern web-based project management tool that visualizes tasks in a Gantt-style timeline, helping you organize and track project schedules with a clean and interactive interface.",
  features: [
    "Interactive timeline visualization",
    "Project scheduling system",
    "Clean dashboard UI",
  ],
  tags: ["HTML", "CSS", "JavaScript"],
  liveUrl: "https://gantt-flow-eta.vercel.app/",
  githubUrl: "https://github.com/TamerSameh/GanttFlow",
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.header}>
        <p className={styles.title}>Project</p>
        <h2 className={styles.subtitle}>Featured Project</h2>
      </div>

      <div
        ref={ref}
        className={`${styles.showcase} ${visible ? styles.showcaseVisible : ""}`}
      >
        <div className={styles.details}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>

          <div className={styles.features}>
            {project.features.map((feature) => (
              <span key={feature} className={styles.feature}>
                <span className={styles.featureIcon}>&#10003;</span>
                {feature}
              </span>
            ))}
          </div>

          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.actions}>
            <a
              href={project.liveUrl}
              className={`${styles.button} ${styles.buttonPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
            <a
              href={project.githubUrl}
              className={`${styles.button} ${styles.buttonSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>

        <a
          href={project.liveUrl}
          className={styles.preview}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.previewGlow} />
          <div
            className={styles.previewInner}
            style={{
              backgroundImage: "url(/ganttflow-banner.png)",
            }}
          >
            <span className={styles.previewBadge}>
              <span className={styles.previewDot} />
              gantt-flow.vercel.app
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
