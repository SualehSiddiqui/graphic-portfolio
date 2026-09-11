import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import "./style.css";

const CharacterCard = ({ character, index }) => {
  const [activeMedia, setActiveMedia] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextMedia = () => {
    setDirection(1);

    setActiveMedia((prev) =>
      prev === character.media.length - 1 ? 0 : prev + 1
    );
  };

  const previousMedia = () => {
    setDirection(-1);

    setActiveMedia((prev) =>
      prev === 0 ? character.media.length - 1 : prev - 1
    );
  };

  const activeItem = character.media[activeMedia];

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 1.08,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <motion.article
      className={`character-card ${character.orientation || ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10 }}
    >
      {/* IMAGE / VIDEO AREA */}
      <div className="character-image-wrapper">

        <AnimatePresence
          mode="wait"
          custom={direction}
        >
          {activeItem.type === "image" ? (
            <motion.img
              key={`image-${activeMedia}`}
              src={activeItem.src}
              alt={`${character.name} artwork ${activeMedia + 1}`}
              className="character-image"
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ) : (
            <motion.video
              key={`video-${activeMedia}`}
              src={activeItem.src}
              className="character-video"
              autoPlay
              muted
              loop
              playsInline
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          )}
        </AnimatePresence>

        {/* OVERLAY */}
        <div className="character-overlay" />

        {/* NUMBER */}
        <div className="character-number">
          <span>{character.id}</span>

          <span>
            / {String(character.media.length).padStart(2, "0")}
          </span>
        </div>

        {/* MEDIA TYPE */}
        {activeItem.type === "video" && (
          <div className="media-type">
            MOTION
          </div>
        )}

        {/* HOVER LABEL */}
        <div className="character-hover-text">
          CHARACTER
          <ArrowUpRight size={17} />
        </div>

        {/* NAVIGATION */}
        {character.media.length > 1 && (
          <>
            <button
              className="image-nav image-nav-left"
              onClick={previousMedia}
              aria-label="Previous artwork"
            >
              <ChevronLeft size={19} />
            </button>

            <button
              className="image-nav image-nav-right"
              onClick={nextMedia}
              aria-label="Next artwork"
            >
              <ChevronRight size={19} />
            </button>
          </>
        )}

        {/* DOTS */}
        {character.media.length > 1 && (
          <div className="image-dots">
            {character.media.map((item, mediaIndex) => (
              <button
                key={mediaIndex}
                className={`image-dot ${activeMedia === mediaIndex ? "active" : ""
                  } ${item.type === "video" ? "video-dot" : ""
                  }`}
                onClick={() => {
                  setDirection(
                    mediaIndex > activeMedia ? 1 : -1
                  );

                  setActiveMedia(mediaIndex);
                }}
                aria-label={`View media ${mediaIndex + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="character-card-footer">
        <div>
          <span className="character-label">
            CHARACTER ART
          </span>

          <h3>{character.name}</h3>
        </div>

        <span className="art-count">
          {String(activeMedia + 1).padStart(2, "0")} —
          {String(character.media.length).padStart(2, "0")}
        </span>
      </div>
    </motion.article>
  );
};

const CharacterCardsComponent = ({ characters, num, heading, id }) => {
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);

  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const calculateDragLimit = () => {
      if (!scrollerRef.current || !trackRef.current) return;

      const scrollerWidth = scrollerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;

      const maxDrag = Math.max(
        0,
        trackWidth - scrollerWidth
      );

      setDragLimit(maxDrag);
    };

    calculateDragLimit();

    window.addEventListener("resize", calculateDragLimit);

    return () => {
      window.removeEventListener(
        "resize",
        calculateDragLimit
      );
    };
  }, [characters]);

  return (
    <section className="character-section" id="work">
      <div className="character-section-glow" />

      {/* HEADER */}
      <motion.div
        className="character-section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div id={id}>
          <span className="section-eyebrow">
            {num} — SELECTED COLLECTION
          </span>

          {heading}
        </div>
      </motion.div>

      {/* SCROLLER */}
      <div
        className="character-scroller"
        ref={scrollerRef}
      >
        <motion.div
          ref={trackRef}
          className="character-track"
          drag="x"
          dragConstraints={{
            left: -dragLimit,
            right: 0,
          }}
          dragElastic={0.08}
          dragTransition={{
            bounceStiffness: 200,
            bounceDamping: 20,
          }}
        >
          {characters.map((character, index) => (
            <CharacterCard
              key={id + character.id}
              character={character}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* BOTTOM */}
      <motion.div
        className="character-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <span>← DRAG TO EXPLORE</span>

        <div className="character-progress">
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <span>
          {String(characters.length).padStart(2, "0")} CHARACTERS
        </span>
      </motion.div>
    </section>
  );
};

export default CharacterCardsComponent;