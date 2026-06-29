import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const ratios = ratiosRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        let maxId = "home";
        let maxRatio = 0;
        ratios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });
        setActive(maxId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    []
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    if (menuOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [menuOpen]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.inner}>
          <a
            href="#home"
            className={styles.logo}
            onClick={(e) => handleClick(e, "#home")}
          >
            Tamer<span className={styles.logoAccent}>.</span>
          </a>

          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={active === item.href.replace("#", "") ? styles.active : ""}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href.replace("#", "") ? styles.active : ""}
            onClick={(e) => handleClick(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
