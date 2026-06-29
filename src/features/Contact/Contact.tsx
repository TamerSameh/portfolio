import { useRef, useEffect, useState } from "react";
import styles from "./Contact.module.css";

const links = [
  {
    icon: "E",
    title: "Email",
    hint: "tamersameh.work@gmail.com",
    href: "mailto:tamersameh.work@gmail.com",
  },
  {
    icon: "GH",
    title: "GitHub",
    hint: "@TamerSameh",
    href: "https://github.com/TamerSameh",
  },
  {
    icon: "LI",
    title: "LinkedIn",
    hint: "linkedin.com/in/tamer-sameh",
    href: "https://www.linkedin.com/in/tamer-sameh",
  },
];

export default function Contact() {
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
      <span className={styles.label}>Get in Touch</span>
      <h2 className={styles.title}>Let&rsquo;s work together</h2>
      <p className={styles.text}>
        I&rsquo;m currently available for freelance work and full-time
        opportunities. If you have a project or role that fits, feel free to
        reach out.
      </p>

      <div className={styles.links}>
        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className={styles.link}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          >
            <span className={styles.linkIcon}>{link.icon}</span>
            <span className={styles.linkLabel}>
              <span className={styles.linkTitle}>{link.title}</span>
              <span className={styles.linkHint}>{link.hint}</span>
            </span>
          </a>
        ))}
      </div>

      <p className={styles.footer}>
        &copy; {new Date().getFullYear()} Tamer Sameh. Built with React &amp; TypeScript.
      </p>
    </div>
  );
}
