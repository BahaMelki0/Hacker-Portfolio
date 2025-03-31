import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = Math.max(10, window.innerWidth / 100); // Dynamic font size
    const columns = Math.floor(canvas.width / fontSize);

    // Initialize drops with random starting positions
    const drops = Array.from({ length: columns }).map(() =>
      Math.floor((Math.random() * canvas.height) / fontSize)
    );

    function draw() {
      // Semi-transparent background to create the trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Green text with a subtle glow effect
      ctx.fillStyle = "#00ff00";
      ctx.shadowColor = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop position with randomness
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.3;
      }
      requestAnimationFrame(draw);
    }

    draw();

    // Handle window resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, background: "#000" }}
    />
  );
};

export default MatrixBackground;
