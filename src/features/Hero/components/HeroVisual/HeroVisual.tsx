import styles from "./HeroVisual.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.window}>
        <div className={styles.header}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <div className={styles.body}>
          <span className={styles.line}>
            <span className={styles.kw}>const</span>{" "}
            <span className={styles.prop}>developer</span>{" "}
            <span className={styles.punc}>=</span>{" "}
            <span className={styles.punc}>{"{"}</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.prop}>name</span>
            <span className={styles.punc}>:</span>{" "}
            <span className={styles.str}>"Tamer Sameh"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.prop}>role</span>
            <span className={styles.punc}>:</span>{" "}
            <span className={styles.str}>"Frontend Developer"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.prop}>location</span>
            <span className={styles.punc}>:</span>{" "}
            <span className={styles.str}>"Egypt"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.prop}>stack</span>
            <span className={styles.punc}>:</span>{" "}
            <span className={styles.punc}>[</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"React"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"TypeScript"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"Next.js"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"Tailwind"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"Node.js"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.punc}>]</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.prop}>available</span>
            <span className={styles.punc}>:</span>{" "}
            <span className={styles.bool}>true</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={styles.line}>
            <span className={styles.punc}>{"}"}</span>
            <span className={styles.punc}>;</span>
          </span>
        </div>
      </div>
    </div>
  );
}
