import { useEffect, useRef } from "react";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const initializeCanvas = (canvas) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const fontSize = Math.max(10, window.innerWidth / 100);
  const columns = Math.floor(canvas.width / fontSize);
  return { fontSize, drops: Array.from({ length: columns }).fill(0) };
};

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return undefined;
    }

    let animationFrameId;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = mediaQuery.matches;
    let { fontSize, drops } = initializeCanvas(canvas);

    const handleResize = () => {
      ({ fontSize, drops } = initializeCanvas(canvas));
    };

    const handleMotionPreference = (event) => {
      isReducedMotion = event.matches;
    };

    const addMotionListener = () => {
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", handleMotionPreference);
        return () => mediaQuery.removeEventListener("change", handleMotionPreference);
      }
      if (mediaQuery.addListener) {
        mediaQuery.addListener(handleMotionPreference);
        return () => mediaQuery.removeListener(handleMotionPreference);
      }
      return undefined;
    };

    const removeMotionListener = addMotionListener();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ff00";
      ctx.shadowColor = "#00ff00";
      ctx.shadowBlur = 0;
      ctx.font = `${fontSize}px monospace`;

      drops = drops.map((value, index) => {
        const text = LETTERS[Math.floor(Math.random() * LETTERS.length)];
        ctx.fillText(text, index * fontSize, value * fontSize);
        if (value * fontSize > canvas.height && Math.random() > 0.975) {
          return 0;
        }
        return value + (isReducedMotion ? 0.1 : 0.3);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (removeMotionListener) {
        removeMotionListener();
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, background: "#000" }}
    />
  );
};

export default MatrixBackground;
