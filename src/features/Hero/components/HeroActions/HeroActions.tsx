import styles from "./HeroActions.module.css";

export default function HeroActions() {
  return (
    <div className={styles.actions}>
      <button className={styles.primary} type="button">
        View Projects
      </button>
      <button className={styles.secondary} type="button">
        Download CV
      </button>
    </div>
  );
}
