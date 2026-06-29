import styles from "./SocialLinks.module.css";

const links = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "#" },
  { label: "Resume", href: "#" },
] as const;

export default function SocialLinks() {
  return (
    <div className={styles.list}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className={styles.link}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
