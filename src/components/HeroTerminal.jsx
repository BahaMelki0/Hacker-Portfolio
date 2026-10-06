import React, { useState, useEffect } from "react";
import { usePortfolio } from "../context/PortfolioContext";

function HeroTerminal() {
  const { data: PORTFOLIO } = usePortfolio();
  const { terminalDemo } = PORTFOLIO;
  const [lineIdx, setLineIdx] = useState(0);
  const [history, setHistory] = useState([]);
  const [current, setCurrent] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const entry = terminalDemo[lineIdx % terminalDemo.length];
    const cmd = entry.cmd;

    if (typing) {
      if (current.length < cmd.length) {
        const delay = 38 + Math.random() * 40;
        const t = setTimeout(() => setCurrent(cmd.slice(0, current.length + 1)), delay);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setHistory((h) => [...h.slice(-5), entry]);
        setCurrent("");
        setTyping(false);
      }, 500);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setTyping(true);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [current, typing, lineIdx, terminalDemo]);

  return (
    <div className="mx-terminal-stream">
      {history.map((entry, i) => (
        <div
          className="mx-terminal-entry"
          key={i}
          style={{ opacity: 1 - (history.length - 1 - i) * 0.14 }}
        >
          <div className="mx-terminal-command">
            <span className="mx-hl">▸</span>{" "}
            <span className="mx-dim">{entry.cmd}</span>
          </div>
          <div className="mx-terminal-output">{entry.out}</div>
        </div>
      ))}
      <div className="mx-terminal-command mx-terminal-current">
        <span className="mx-hl">▸</span>{" "}
        <span className="mx-hl">{current}</span>
        {typing && <span className="mx-caret">▋</span>}
      </div>
    </div>
  );
}

export default HeroTerminal;
