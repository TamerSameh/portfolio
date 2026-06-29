import { useCallback, useRef, useEffect } from "react";
import "./MouseLightLayer.css";

export default function MouseLightLayer() {
  const divRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const posRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    posRef.current = { x: e.clientX, y: e.clientY };
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        const el = divRef.current;
        if (el) {
          el.style.setProperty("--mouse-x", `${posRef.current.x}px`);
          el.style.setProperty("--mouse-y", `${posRef.current.y}px`);
        }
        rafRef.current = 0;
      });
    }
  }, []);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={divRef}
      className="background-mouselight"
      aria-hidden="true"
    />
  );
}
