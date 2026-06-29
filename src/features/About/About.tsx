import { useRef, useEffect, useState } from "react";
import styles from "./About.module.css";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Node.js",
  "CSS Modules",
  "Tailwind",
  "Git",
];

export default function About() {
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
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.content} ${visible ? styles.visible : ""}`}
    >
      <span className={styles.label}>About Me</span>
      <h2 className={styles.title}>
        Frontend developer crafting modern web experiences
      </h2>
      <div className={styles.description}>
        <p>
          I&rsquo;m a frontend developer who builds responsive, accessible
          interfaces with <span className={styles.highlight}>React</span>,{" "}
          <span className={styles.highlight}>TypeScript</span>, and modern CSS.
          I focus on writing clean, maintainable code that works reliably across
          devices and browsers.
        </p>
        <p>
          I&rsquo;m currently expanding into full-stack with{" "}
          <span className={styles.highlight}>Next.js</span> and backend
          patterns, building complete features from design through deployment.
        </p>
      </div>
      <div className={styles.skills}>
        {skills.map((skill) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
