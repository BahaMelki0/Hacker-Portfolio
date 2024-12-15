import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MatrixBackground from "./components/MatrixBackground";
import Particle from "./components/Particle";
import ScrollToTop from "./components/ScrollToTop";
import Pre from "./components/Pre";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Display the loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
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
      )}
    </Router>
  );
}

export default App;
