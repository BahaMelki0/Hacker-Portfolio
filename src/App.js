import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MatrixBackground from "./components/MatrixBackground";
import ScrollToTop from "./components/ScrollToTop";
import AdminRedirect from "./components/AdminRedirect";
import Pre from "./components/Pre";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Router>
      {loading ? (
        <Pre />
      ) : (
        <div className="App">
          <MatrixBackground />          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/admin-panel" element={<AdminRedirect />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;



