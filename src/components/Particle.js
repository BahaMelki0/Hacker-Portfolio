import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 60,
            density: { enable: true, value_area: 800 },
          },
          color: {
            value: "#00ffff", // Neon blue for a change
          },
          shape: {
            type: ["circle", "triangle"], // Mix of circle and triangle shapes
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
            },
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: true,
            out_mode: "bounce",
            bounce: true,
          },
          life: {
            duration: {
              value: 20,
            },
            count: 1,
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#00ffff",
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
