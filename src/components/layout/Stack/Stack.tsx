import type { ReactNode } from "react";
import styles from "./Stack.module.css";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

interface StackProps {
  children: ReactNode;
  gap?: StackGap;
}

const gapClass: Record<StackGap, string> = {
  xs: styles["gap-xs"],
  sm: styles["gap-sm"],
  md: styles["gap-md"],
  lg: styles["gap-lg"],
  xl: styles["gap-xl"],
};

export default function Stack({ children, gap = "md" }: StackProps) {
  return (
    <div className={`${styles.stack} ${gapClass[gap]}`}>
      {children}
    </div>
  );
}
