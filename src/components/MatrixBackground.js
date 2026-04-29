import { useEffect, useRef } from "react";

const GLYPHS =
  "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789<>[]{}/\\|=+*ABCDEF";

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fontSize = 14;
    let cols = 0;
    let drops = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols  = Math.floor(w / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * (h / fontSize));
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const isMobile = () => window.innerWidth <= 768;
    const getFpsInterval = () => (isMobile() ? 1000 / 15 : 1000 / 30);

    let raf = 0;
    let last = 0;
    let running = true;

    const draw = (ts) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      if (ts - last < getFpsInterval()) return;
      last = ts;

      ctx.fillStyle = "rgba(10, 16, 12, 0.10)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
      ctx.textBaseline = "top";

      drops.forEach((y, i) => {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const px = i * fontSize;
        const py = y * fontSize;

        // bright head ~2% of the time
        ctx.globalAlpha = Math.random() < 0.02 ? 0.9 : 0.38;
        ctx.fillStyle   = Math.random() < 0.02 ? "#cfffcf" : "#6fdc8c";
        ctx.fillText(ch, px, py);
        ctx.globalAlpha = 1;

        if (py > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      });
    };

    raf = requestAnimationFrame(draw);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, background: "#0a100c" }}
      aria-hidden="true"
    />
  );
};

export default MatrixBackground;
