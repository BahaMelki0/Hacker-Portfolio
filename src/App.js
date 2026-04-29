import React, { useState, useEffect, useCallback, lazy, Suspense, Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pre from "./components/Pre";
import MatrixBackground from "./components/MatrixBackground";
import ScrollToTop from "./components/ScrollToTop";
import { PortfolioProvider } from "./context/PortfolioContext";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./mx.css";
import "./App.css";

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) {
      const msg = process.env.NODE_ENV === "development" ? String(this.state.error) : null;
      return (
        <div style={{ color: "#6fdc8c", background: "#0a100c", padding: 40, fontFamily: "'JetBrains Mono', monospace", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <div style={{ color: "#e56b6b", fontSize: 13 }}>[ runtime error ]</div>
          {msg && <pre style={{ whiteSpace: "pre-wrap", color: "#e56b6b", fontSize: 12, maxWidth: 600 }}>{msg}</pre>}
          <button onClick={() => window.location.reload()} style={{ background: "none", border: "1px dashed #6fdc8c", color: "#6fdc8c", fontFamily: "inherit", padding: "8px 20px", cursor: "pointer", fontSize: 12 }}>
            ▶ reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Route-based code splitting
const Home     = lazy(() => import("./components/Home/Home"));
const About    = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume   = lazy(() => import("./components/Resume/ResumeNew"));
const Contact  = lazy(() => import("./components/Contact/Contact"));
const AdminRedirect = lazy(() => import("./components/AdminRedirect"));

function ScrollProgress() {
  const [pct, setPct] = useState(0);

  const onScroll = useCallback(() => {
    const el  = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    setPct(max > 0 ? (el.scrollTop / max) * 100 : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${pct}%` }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

function AppContent() {
  const location = useLocation();

  // Scroll reveal
  useEffect(() => {
    const targets = document.querySelectorAll(".mx-reveal");
    if (!targets.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mx-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-fade">
      <Suspense fallback={<Pre />}>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/project"     element={<Projects />} />
          <Route path="/about"       element={<About />} />
          <Route path="/resume"      element={<Resume />} />
          <Route path="/contact"     element={<Contact />} />
          <Route path="/admin-panel" element={<AdminRedirect />} />
          <Route path="*"            element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { pathname, hash, origin } = window.location;
    if (!hash && pathname.endsWith("/admin-panel")) {
      const basePath = pathname.replace(/\/admin-panel$/, "");
      window.location.replace(`${origin}${basePath}#/admin-panel`);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      setLoading(false);
      return undefined;
    }
    window.addEventListener("load", handleLoad, { once: true });
    const fallbackTimeout = window.setTimeout(() => setLoading(false), 3000);
    return () => {
      window.removeEventListener("load", handleLoad);
      window.clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <ErrorBoundary>
    <PortfolioProvider>
      <Router>
        {loading ? (
          <Pre />
        ) : (
          <div className="App mx-crt">
            <ScrollProgress />
            <MatrixBackground />
            <Navbar />
            <ScrollToTop />
            <AppContent />
            <Footer />
          </div>
        )}
      </Router>
    </PortfolioProvider>
    </ErrorBoundary>
  );
}

export default App;
