"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: {
            value: ["#F5F5DC", "#556B2F", "#8B0000"], // cream, olive, deep red
          },
          links: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: { enable: true },
            value: 40,
          },
          opacity: {
            value: { min: 0.2, max: 0.5 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 4 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-15 pointer-events-auto"
    />
  );
}
