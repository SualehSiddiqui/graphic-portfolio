import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./style.css";

import review1 from "../../assets/Reviews/review1.avif";
import review2 from "../../assets/Reviews/review2.avif";
import review3 from "../../assets/Reviews/review3.avif";
import review4 from "../../assets/Reviews/review4.avif";
import review5 from "../../assets/Reviews/review5.avif";
import review6 from "../../assets/Reviews/review6.avif";
import review7 from "../../assets/Reviews/review7.avif";
import review8 from "../../assets/Reviews/review8.avif";
import review9 from "../../assets/Reviews/review9.avif";
import review10 from "../../assets/Reviews/review10.avif";
import review11 from "../../assets/Reviews/review11.avif";
import review12 from "../../assets/Reviews/review12.avif";
import review13 from "../../assets/Reviews/review13.avif";
import review14 from "../../assets/Reviews/review14.avif";
import review15 from "../../assets/Reviews/review15.avif";
import review16 from "../../assets/Reviews/review16.avif";
import review17 from "../../assets/Reviews/review17.avif";
import review18 from "../../assets/Reviews/review18.avif";
import review19 from "../../assets/Reviews/review19.avif";

const reviews = [
    {
        id: "01",
        image: review1,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "02",
        image: review2,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "03",
        image: review3,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "04",
        image: review4,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "05",
        image: review5,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "06",
        image: review6,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "07",
        image: review7,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "08",
        image: review8,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "09",
        image: review9,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "10",
        image: review10,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "11",
        image: review11,
        platform: "X / TWITTER",
        type: "square",
    },
    {
        id: "12",
        image: review12,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "13",
        image: review13,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "14",
        image: review14,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "15",
        image: review15,
        platform: "X / TWITTER",
        type: "landscape",
    },
    {
        id: "16",
        image: review16,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "17",
        image: review17,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "18",
        image: review18,
        platform: "X / TWITTER",
        type: "portrait",
    },
    {
        id: "19",
        image: review19,
        platform: "X / TWITTER",
        type: "landscape",
    },
];

const getIndex = (index) => {
    if (index < 0) return reviews.length - 1;
    if (index >= reviews.length) return 0;
    return index;
};

const getDirection = (current, next) => {
    if (
        current === reviews.length - 1 &&
        next === 0
    ) {
        return 1;
    }

    if (
        current === 0 &&
        next === reviews.length - 1
    ) {
        return -1;
    }

    return next > current ? 1 : -1;
};

const slideVariants = {
    enter: (direction) => ({
        opacity: 0,
        x: direction > 0 ? 60 : -60,
        scale: 0.97,
    }),

    center: {
        opacity: 1,
        x: 0,
        scale: 1,
    },

    exit: (direction) => ({
        opacity: 0,
        x: direction > 0 ? -60 : 60,
        scale: 0.97,
    }),
};

function Reviews() {
    const [active, setActive] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextReview = () => {
        const next = getIndex(active + 1);

        setDirection(getDirection(active, next));
        setActive(next);
    };

    const previousReview = () => {
        const previous = getIndex(active - 1);

        setDirection(getDirection(active, previous));
        setActive(previous);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((current) => {
                const next = getIndex(current + 1);

                setDirection(getDirection(current, next));

                return next;
            });
        }, 5500);

        return () => clearInterval(interval);
    }, []);

    const currentReview = reviews[active];

    return (
        <section className="reviews-section" id="reviews">
            <div className="reviews-container">

                {/* HEADER */}
                <div className="reviews-header">

                    <div className="reviews-header-left">
                        <div className="reviews-eyebrow">
                            <span className="reviews-dot" />
                            08 — CLIENT REVIEWS
                        </div>

                        <h2>
                            WHAT THEY
                            <br />
                            <span>SAY.</span>
                        </h2>
                    </div>

                    <div className="reviews-header-right">
                        <span className="reviews-index">
                            08 / 08
                        </span>

                        <p>
                            Real feedback from clients who trusted
                            us with their ideas, projects and worlds.
                        </p>
                    </div>

                </div>

                {/* SLIDER */}
                <div className="reviews-slider">

                    <button
                        className="reviews-side-button reviews-prev"
                        onClick={previousReview}
                        aria-label="Previous review"
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <div className="reviews-stage">

                        {/* PREVIOUS */}
                        <div className="reviews-preview reviews-preview-left">
                            <img
                                src={
                                    reviews[
                                        getIndex(active - 1)
                                    ].image
                                }
                                alt="Previous client review"
                            />
                        </div>

                        {/* ACTIVE */}
                        <div className={`reviews-main ${currentReview.type}`}>
                            <AnimatePresence
                                mode="wait"
                                custom={direction}
                            >
                                <motion.div
                                    key={currentReview.id}
                                    className="reviews-main-image"
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.45,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <img
                                        src={currentReview.image}
                                        alt={`Client review ${currentReview.id}`}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* NEXT */}
                        <div className="reviews-preview reviews-preview-right">
                            <img
                                src={
                                    reviews[
                                        getIndex(active + 1)
                                    ].image
                                }
                                alt="Next client review"
                            />
                        </div>

                    </div>

                    <button
                        className="reviews-side-button reviews-next"
                        onClick={nextReview}
                        aria-label="Next review"
                    >
                        <ArrowRight size={18} />
                    </button>

                </div>

                {/* CONTROLS */}
                <div className="reviews-controls">

                    <div className="reviews-counter">
                        <span>{currentReview.id}</span>
                        <i>/</i>
                        <span>{String(reviews.length).padStart(2, "0")}</span>
                    </div>

                    <div className="reviews-progress">
                        <motion.div
                            className="reviews-progress-fill"
                            animate={{
                                width: `${((active + 1) / reviews.length) * 100}%`,
                            }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <div className="reviews-platform">
                        {currentReview.platform}
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Reviews;