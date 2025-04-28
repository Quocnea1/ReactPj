import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Hero from './pages/Hero';
import About from './pages/About';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";

// Bọc logic loading
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      )}
    </>
  );
};

// App chính
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
