import styles from "./MainHeading.module.css";

export default function MainHeading() {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Front-End Developer</span>
      <h1 className={styles.heading}>
        Tamer <span className={styles.accent}>Sameh</span>
      </h1>
      <p className={styles.subtitle}>
        I build clean, responsive frontend interfaces
        <br />
        that are interactive, accessible, and built to perform.
      </p>
    </div>
  );
}
