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
            value: 50, // Fewer particles for better visibility
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
              width: 15,
              height: 15,
            },
          },
          
            
          opacity: {
            value: 0.8,
            random: true,
          },
          size: {
            value: 20,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 10,
            },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
