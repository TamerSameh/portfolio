import type { ReactNode } from "react";
import Background from "./Background";
import { Navbar } from "./Navbar";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <Background />
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
}
