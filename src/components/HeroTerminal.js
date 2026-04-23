import React, { useState, useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";

function HeroTerminal() {
  const { data: PORTFOLIO } = usePortfolio();
  const [lineIdx, setLineIdx] = useState(0);
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const entry = PORTFOLIO.terminalDemo[lineIdx % PORTFOLIO.terminalDemo.length];
    const cmd = entry.cmd;

    if (typing) {
      if (current.length < cmd.length) {
        const delay = 38 + Math.random() * 40;
        const t = setTimeout(() => setCurrent(cmd.slice(0, current.length + 1)), delay);
        return () => clearTimeout(t);
      }
      // done typing → show output after a pause
      const t = setTimeout(() => {
        setHistory((h) => [...h.slice(-5), entry]);
        setCurrent("");
        setTyping(false);
      }, 500);
      return () => clearTimeout(t);
    } else {
      // pause before next command
      const t = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setTyping(true);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [current, typing, lineIdx]);

  return (
    <div style={{ fontFamily: "var(--mx-font)", fontSize: 13, lineHeight: 1.65 }}>
      {history.map((entry, i) => (
        <div key={i} style={{ opacity: 1 - (history.length - 1 - i) * 0.14 }}>
          <div>
            <span className="mx-hl">▸</span>{" "}
            <span className="mx-dim">{entry.cmd}</span>
          </div>
          <div
            style={{
              color: "var(--mx-green)",
              opacity: 0.8,
              paddingLeft: 16,
              whiteSpace: "pre",
              marginBottom: 4,
            }}
          >
            {entry.out}
          </div>
        </div>
      ))}
      <div>
        <span className="mx-hl">▸</span>{" "}
        <span className="mx-hl">{current}</span>
        {typing && <span className="mx-caret">▋</span>}
      </div>
    </div>
  );
}

export default HeroTerminal;
