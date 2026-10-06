import React, { useState, useCallback, useEffect, useRef } from "react";

const CHARS = "01!<>-_\\/[]{}=+*^?#";

function DecryptText({ text, trigger = "mount", duration = 800, className = "", style = {} }) {
  const [out, setOut] = useState(trigger === "mount" ? scramble(text, 0) : text);
  const rafRef = useRef(0);

  function scramble(str, progress) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") { result += " "; continue; }
      const reveal = progress * str.length;
      if (i < reveal - 2) result += str[i];
      else result += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
    return result;
  }

  const run = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setOut(p < 1 ? scramble(text, p) : text);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, [text, duration]);

  useEffect(() => {
    if (trigger === "mount") run();
    return () => cancelAnimationFrame(rafRef.current);
  }, [run, trigger]);

  const hoverProps = trigger === "hover" ? { onMouseEnter: run } : {};

  return (
    <span className={className} style={style} {...hoverProps}>
      {out}
    </span>
  );
}

export default DecryptText;
