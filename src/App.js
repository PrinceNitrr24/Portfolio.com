import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "./components/navBar";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import particles from "./utilis.js/particles";
import React, { useState, useEffect } from "react";
import bgImage from "./video/video9.mp4";
// import { motion } from "framer-motion";

import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  //cursor move

  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  

  

  // useEffect(() => {
  //   const mouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };
  //   window.addEventListener("mousemove", mouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //     // backgroundColor:"yellow"
  //   },
  // };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowHeader(true);
    }, 5000);
  }, []);

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderparticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Loader */}
      {loading && (
        <div className="loader-container">
          <video className="video1" autoPlay loop muted>
            <source src={bgImage} type="video/mp4" />
          </video>
          <FadeLoader color={"#02fa44"} loading={loading} size={150} />
        </div>
      )}

      {/* Header Section */}
      {showHeader && (
        <div>
          {/*particles js */}
          {renderparticleJsInHomePage && (
            <Particles id="particles" options={particles} init={handleInit} />
          )}

          {/* navbar */}
          <Navbar />

          {/* <motion.div
            className="cursor"
            variants={variants}
            animate="default"
          /> */}

          {/* main page content */}
          <div className="App__main-page-content">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route index path="/about" element={<About />} />
              <Route index path="/resume" element={<Resume />} />
              <Route index path="/skills" element={<Skills />} />
              <Route index path="/portfolio" element={<Portfolio />} />
              <Route index path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
