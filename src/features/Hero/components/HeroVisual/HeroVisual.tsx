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
            <span className={styles.str}>"HTML5"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"CSS3"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"JavaScript"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"Bootstrap"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent} ${styles["indent-2"]}`}>
            <span className={styles.str}>"Vite"</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.punc}>]</span>
            <span className={styles.punc}>,</span>
          </span>
          <span className={`${styles.line} ${styles.indent}`}>
            <span className={styles.prop}>status</span>
            <span className={styles.punc}>:</span>{" "}
            <span className={styles.str}>"Open to Work"</span>
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
