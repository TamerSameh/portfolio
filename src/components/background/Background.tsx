import "./Background.css";
import NoiseLayer from "./NoiseLayer";
import GridLayer from "./GridLayer";
import GlowLayer from "./GlowLayer";
import MouseLightLayer from "./MouseLightLayer";
import MeridianLayer from "./MeridianLayer";

export default function Background() {
  return (
    <div className="background" aria-hidden="true">
      <NoiseLayer />
      <GridLayer />
      <GlowLayer />
      <MouseLightLayer />
      <MeridianLayer />
    </div>
  );
}
