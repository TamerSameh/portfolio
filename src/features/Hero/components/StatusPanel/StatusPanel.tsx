import styles from "./StatusPanel.module.css";

const rows = [
  { label: "STATUS", value: "Open to Work" },
  { label: "LOCATION", value: "Egypt" },
  { label: "FOCUS", value: "Building Modern Web Applications" },
] as const;

export default function StatusPanel() {
  return (
    <div className={styles.panel}>
      {rows.map((row) => (
        <div key={row.label} className={styles.row}>
          <span className={styles.label}>{row.label}</span>
          <span className={styles.value}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}
