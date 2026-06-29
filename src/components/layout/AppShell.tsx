import type { ReactNode } from "react";
import Background from "./Background";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <>
      <Background />
      <main>{children}</main>
    </>
  );
}
