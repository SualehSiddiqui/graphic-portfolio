import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./style.css";
import Navbar from "../Navbar/index.jsx";

//Images
import Img1 from "../../assets/Hero/img1.avif";
import Img2 from "../../assets/Hero/img2.avif";
import Img3 from "../../assets/Hero/img3.avif";
import Img4 from "../../assets/Hero/img4.avif";
import Img5 from "../../assets/Hero/img5.avif";
import Img6 from "../../assets/Hero/img6.avif";

const Hero = () => {
  const titleContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const titleItem = {
    hidden: {
      y: 100,
      opacity: 0,
      filter: "blur(12px)",
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-grid" />
      <div className="hero-glow glow-purple" />
      <div className="hero-glow glow-pink" />
      <div className="noise" />

      {/* Navigation */}
      <Navbar />

      {/* Main Hero */}
      <div className="hero-content">
        {/* Left Content */}
        <div className="hero-copy">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            SELECTED CREATIVE WORKS — 2026
          </motion.p>

          <motion.h1
            className="hero-title"
            variants={titleContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={titleItem}>A WORLD</motion.span>

            <motion.span variants={titleItem}>OF VISUAL</motion.span>

            <motion.span className="hero-gradient" variants={titleItem}>
              STORIES.
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            A curated collection of ideas, colours, concepts and creative
            explorations brought to life through design.
          </motion.p>

          <motion.a
            href="#work"
            className="explore-btn"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>EXPLORE THE WORK</span>
            <ArrowDown size={17} />
          </motion.a>
        </div>

        {/* 3D KINETIC ART REEL */}
        <motion.div
          className="art-stage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          {/* Background typography */}
          <div className="stage-word stage-word-top">
            ART
          </div>

          <div className="stage-word stage-word-bottom">
            WORLD
          </div>

          {/* Main 3D artwork reel */}
          <motion.div
            className="art-reel"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Artwork 1 */}
            <div className="reel-image reel-image-1">
              <img
                src={Img1}
                alt="Artistry World artwork"
              />
            </div>

            {/* Artwork 2 */}
            <div className="reel-image reel-image-2">
              <img
                src={Img2}
                alt="Artistry World artwork"
              />
            </div>

            {/* Artwork 3 */}
            <div className="reel-image reel-image-3">
              <img
                src={Img3}
                alt="Artistry World artwork"
              />
            </div>

            {/* Artwork 4 */}
            <div className="reel-image reel-image-4">
              <img
                src={Img4}
                alt="Artistry World artwork"
              />
            </div>

            {/* Artwork 5 */}
            <div className="reel-image reel-image-5">
              <img
                src={Img5}
                alt="Artistry World artwork"
              />
            </div>

            {/* Artwork 6 */}
            <div className="reel-image reel-image-6">
              <img
                src={Img6}
                alt="Artistry World artwork"
              />
            </div>
          </motion.div>

          {/* Center glow */}
          <div className="stage-light" />
          <motion.div
            className="stage-info stage-info-right"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>VISUAL</span>
            <strong>ARCHIVE</strong>
          </motion.div>

          {/* Small vertical indicator */}
          <div className="stage-indicator">
            <span>SCROLL</span>

            <div className="indicator-line">
              <motion.div
                animate={{
                  y: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>SCROLL TO ENTER THE COLLECTION</span>

        <div className="bottom-line">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <span>↓</span>
      </motion.div>
    </section >
  );
};

export default Hero;