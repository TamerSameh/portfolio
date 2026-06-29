import styles from "./Hero.module.css";
import { StatusPanel } from "./components/StatusPanel";
import { MainHeading } from "./components/MainHeading";
import { HeroActions } from "./components/HeroActions";
import { HeroVisual } from "./components/HeroVisual";
import { TechStack } from "./components/TechStack";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <StatusPanel />
        <MainHeading />
        <HeroActions />
        <TechStack />
      </div>
      <HeroVisual />
    </div>
  );
}
