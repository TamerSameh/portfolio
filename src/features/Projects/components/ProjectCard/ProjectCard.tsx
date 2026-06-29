import { useRef, useEffect, useState } from "react";
import type { Project } from "../../data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={styles.image}>
        <div
          className={styles.imageInner}
          style={{ background: project.gradient }}
        >
          {project.title}
        </div>

        <div className={styles.overlay}>
          <a
            href={project.liveUrl}
            className={`${styles.overlayLink} ${styles.overlayPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            className={`${styles.overlayLink} ${styles.overlaySecondary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div className={styles.features}>
            {project.features.map((feature) => (
              <span key={feature} className={styles.feature}>
                <span className={styles.featureIcon}>&#10003;</span>
                {feature}
              </span>
            ))}
          </div>
        )}

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
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            className={`${styles.button} ${styles.buttonSecondary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
