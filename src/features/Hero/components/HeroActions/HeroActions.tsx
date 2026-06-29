import styles from "./HeroActions.module.css";

export default function HeroActions() {
  return (
    <div className={styles.actions}>
      <a className={styles.primary} href="#projects">
        View Projects
      </a>
      <a
        className={styles.secondary}
        href="/Tamer-Sameh-CV.pdf"
        download
      >
        Download CV
      </a>
    </div>
  );
}
