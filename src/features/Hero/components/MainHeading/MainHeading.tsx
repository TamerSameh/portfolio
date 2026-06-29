import styles from "./MainHeading.module.css";

export default function MainHeading() {
  return (
    <div className={styles.container}>
      <span className={styles.label}>Front-End Developer</span>
      <h1 className={styles.heading}>Tamer Sameh</h1>
      <p className={styles.subtitle}>I build modern web experiences.</p>
    </div>
  );
}
