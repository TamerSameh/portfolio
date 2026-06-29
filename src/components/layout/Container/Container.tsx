import type { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerSize = "sm" | "md" | "lg" | "xl";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
}

const sizeClass: Record<ContainerSize, string> = {
  sm: styles["size-sm"],
  md: styles["size-md"],
  lg: styles["size-lg"],
  xl: styles["size-xl"],
};

export default function Container({
  children,
  size = "xl",
}: ContainerProps) {
  return (
    <div className={`${styles.container} ${sizeClass[size]}`}>
      {children}
    </div>
  );
}
