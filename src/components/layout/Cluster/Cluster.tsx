import type { ReactNode } from "react";
import styles from "./Cluster.module.css";

type ClusterGap = "xs" | "sm" | "md" | "lg" | "xl";

interface ClusterProps {
  children: ReactNode;
  justify?: "start" | "center" | "end" | "between";
  align?: "start" | "center" | "end";
  gap?: ClusterGap;
}

const gapClass: Record<ClusterGap, string> = {
  xs: styles["gap-xs"],
  sm: styles["gap-sm"],
  md: styles["gap-md"],
  lg: styles["gap-lg"],
  xl: styles["gap-xl"],
};

export default function Cluster({
  children,
  justify = "start",
  align = "center",
  gap = "md",
}: ClusterProps) {
  return (
    <div
      className={`${styles.cluster} ${gapClass[gap]}`}
      data-justify={justify}
      data-align={align}
    >
      {children}
    </div>
  );
}
