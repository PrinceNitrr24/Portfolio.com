import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import bgImage from "../../video/3.mp4";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorPosition, setCursorVarient] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      // backgroundColor:"yellow"
    },
    text: {
      height: 250,
      width: 250,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "transparent",
      backgroundImage:
        "url('https://w0.peakpx.com/wallpaper/290/195/HD-wallpaper-wall-art-print-eat-sleep-code-repeat-gifts-merchandise.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    text1: {
      height: 250,
      width: 250,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "transparent",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  };

  const textEnter = () => {
    setCursorVarient("text");
  };
  const textLeave = () => {
    setCursorVarient("default");
  };

  const text1Enter = () => {
    setCursorVarient("text1");
  };
  const text1Leave = () => {
    setCursorVarient("default");
  };

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <>
      <section id="home" className="home">
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorPosition}
        />

        <video className="video" autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <div className="home__text-warpper">
          <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Hey,Myself
            <br />
            <span className="prince">Pɾi̾ɳⓒҽ Kυɱ@ɾ</span>
            <br />
            <p className="web">
              "Elevating web experiences through code,
              <br />
              Welcome to my World!"
            </p>
          </h1>

          {/* Add icons here */}
          <div className="social-icons">
            <a
              href="https://www.instagram.com/prince_nitrr/"
              className="icon-link"
              target="blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/prince2024/"
              className="icon-link"
              target="blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/PrinceNitrr24"
              className="icon-link"
              target="blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@Prince_NITRR"
              className="icon-link"
              target="blank"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(550px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="home__contact-me">
            <button
              className="btn"
              onClick={handleNavigateToContactMePage}
              onMouseEnter={text1Enter}
              onMouseLeave={text1Leave}
            >
              Hire Me!
            </button>
          </div>
        </Animate>
      </section>
    </>
  );
};

export default Home;
