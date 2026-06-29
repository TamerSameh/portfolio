const noiseSvg = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`
);

export default function NoiseLayer() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
        backgroundSize: "200px 200px",
        backgroundRepeat: "repeat",
      }}
    />
  );
}
