import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
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

  const x = useMotionValue(0);

  const [loopWidth, setLoopWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragState = useRef({
    pointerId: null,
    startX: 0,
    lastX: 0,
  });

  /* =========================================================
     CALCULATE WIDTH OF ONE COMPLETE SET
  ========================================================= */

  useEffect(() => {
    const calculateWidth = () => {
      if (!trackRef.current) return;

      // We render the characters twice.
      // Therefore half of the total width = one complete set.
      const width = trackRef.current.scrollWidth / 2;

      setLoopWidth(width);
    };

    calculateWidth();

    const resizeObserver = new ResizeObserver(calculateWidth);

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", calculateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculateWidth);
    };
  }, [characters]);

  /* =========================================================
     INFINITE AUTO SCROLL
  ========================================================= */

  useAnimationFrame((_, delta) => {
    if (isDragging || !loopWidth) return;

    const currentX = x.get();

    // Speed in pixels per second
    const speed = 50;

    let nextX = currentX - (speed * delta) / 1000;

    // Seamlessly loop back to the beginning
    if (nextX <= -loopWidth) {
      nextX += loopWidth;
    }

    x.set(nextX);
  });

  /* =========================================================
     NORMALIZE POSITION FOR INFINITE LOOP
  ========================================================= */

  const normalizeX = (value) => {
    if (!loopWidth) return value;

    let normalized = value;

    while (normalized <= -loopWidth) {
      normalized += loopWidth;
    }

    while (normalized > 0) {
      normalized -= loopWidth;
    }

    return normalized;
  };

  /* =========================================================
     POINTER DOWN
  ========================================================= */

  const handlePointerDown = (event) => {
    /*
      Don't hijack clicks on buttons.

      This is important because your cards contain:
      - Previous button
      - Next button
      - Media dots
    */
    if (event.target.closest("button")) {
      return;
    }

    dragState.current.pointerId = event.pointerId;
    dragState.current.startX = event.clientX;
    dragState.current.lastX = event.clientX;

    setIsDragging(true);

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  /* =========================================================
     POINTER MOVE
  ========================================================= */

  const handlePointerMove = (event) => {
    if (
      !isDragging ||
      dragState.current.pointerId !== event.pointerId
    ) {
      return;
    }

    const currentX = event.clientX;
    const delta = currentX - dragState.current.lastX;

    dragState.current.lastX = currentX;

    const nextX = normalizeX(x.get() + delta);

    x.set(nextX);
  };

  /* =========================================================
     POINTER UP
  ========================================================= */

  const handlePointerUp = (event) => {
    if (dragState.current.pointerId !== event.pointerId) {
      return;
    }

    setIsDragging(false);

    dragState.current.pointerId = null;
    dragState.current.startX = 0;
    dragState.current.lastX = 0;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already have been released.
    }
  };

  /* =========================================================
     POINTER CANCEL
  ========================================================= */

  const handlePointerCancel = (event) => {
    if (dragState.current.pointerId !== event.pointerId) {
      return;
    }

    setIsDragging(false);

    dragState.current.pointerId = null;
    dragState.current.startX = 0;
    dragState.current.lastX = 0;
  };

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
        className={`character-scroller ${isDragging ? "is-dragging" : ""
          }`}
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        <motion.div
          ref={trackRef}
          className="character-track"
          style={{
            x,
          }}
        >
          {/* =================================================
              FIRST SET
          ================================================= */}

          {characters.map((character, index) => (
            <CharacterCard
              key={`first-${id}-${character.id}`}
              character={character}
              index={index}
            />
          ))}

          {/* =================================================
              DUPLICATE SET
              Creates seamless infinite scrolling
          ================================================= */}

          {characters.map((character, index) => (
            <CharacterCard
              key={`second-${id}-${character.id}`}
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
        <span>
          {isDragging
            ? "↔ DRAG TO EXPLORE"
            : "← DRAG TO EXPLORE →"}
        </span>

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