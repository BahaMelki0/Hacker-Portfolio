import React, { useState, useEffect } from "react";
import { 
  HashRouter as Router, 
  Route, 
  Routes, 
  Navigate, 
  useNavigate 
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import MatrixBackground from "./components/MatrixBackground";
import Particle from "./components/Particle";
import ScrollToTop from "./components/ScrollToTop";
import Pre from "./components/Pre";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppContent() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the navigation type is "reload" and redirect to home
    const [navEntry] = performance.getEntriesByType("navigation");
    if (navEntry && navEntry.type === "reload") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Display the loading screen for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Pre />
  ) : (
    <div className="App">
      <MatrixBackground />
      <Particle />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/Hacker-Portfolio">
      <AppContent />
    </Router>
  );
}

export default App;
