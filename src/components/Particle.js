import React from "react";
import Particles from "react-tsparticles";
import bugIcon from "../Assets/bug.svg";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 40, // Maximum number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00ff00", // Green color for fallback
          },
          shape: {
            type: "image",
            image: {
              src: bugIcon,
              width: 20,
              height: 20,
            },
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.2,
            },
          },
          size: {
            value: 15,
            random: true,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            out_mode: "bounce",
            bounce: true,
          },
          life: {
            duration: {
              value: 30, // Each bug lives for 30 seconds
            },
            count: 1, // After completing its lifespan, the bug is removed
          },
          line_linked: {
            enable: true,
            distance: 100, // Link distance threshold
            color: "#00ff00",
            opacity: 0.5,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab", // Show links when bugs are close to the mouse
            },
          },
          modes: {
            grab: {
              distance: 120, // Distance to show links
              line_linked: {
                opacity: 0.8,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
