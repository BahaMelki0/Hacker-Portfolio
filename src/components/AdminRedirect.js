import { useEffect, useState } from "react";

function AdminRedirect() {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const target = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

    const countdown = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          window.clearInterval(countdown);
          window.location.replace(target);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(countdown);
  }, []);

  return (
    <section className="admin-redirect">
      <h1 style={{ color: "#ffffff" }}>Accessing Admin Panel…</h1>
      <div className="retro-counter" aria-live="polite">
        <span className="retro-digit">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </section>
  );
}

export default AdminRedirect;
