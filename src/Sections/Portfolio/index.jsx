import { motion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import "./style.css";

import artwork1 from "../../assets/DNDGroupArtwork/set8img1.avif";
import artwork2 from "../../assets/PrintableModel/set11img6.avif";
import artwork3 from "../../assets/HomePortfolio/OCDesign.avif";
import artwork4 from "../../assets/Models/set16video2.mp4";
import { Link } from "react-router-dom";

const featuredWork = [
    {
        id: "01",
        title: "Party Artwork",
        category: "CHARACTER ART",
        description:
            "A cinematic fantasy composition created for a D&D campaign.",
        character: artwork1,
        size: "large",
        link: "/portfolio#party-artworks",
    },
    {
        id: "02",
        title: "Printable Model",
        category: "CHARACTER DESIGN",
        description:
            "Character-focused artwork built around personality and atmosphere.",
        type: "video",
        image: artwork2,
        size: "small",
        link: "/portfolio#printable-model",
    },
    {
        id: "03",
        title: "Oc Design",
        category: "ENVIRONMENT",
        description:
            "A detailed environment designed to feel expansive and cinematic.",
        image: artwork3,
        size: "small",
        link: "/portfolio#oc-design",
    },
    {
        id: "04",
        title: "3d Universe",
        category: "BRANDING",
        description:
            "A visual identity developed around a bold and distinctive direction.",
        character: artwork4,
        size: "wide",
        link: "/portfolio#3d-universe",
    },
];

export default function PortfolioPreview() {
    return (
        <section className="portfolio-section" id="work">
            {/* Background typography */}
            <div className="portfolio-bg-word">
                PORTFOLIO
            </div>

            {/* Decorative line */}
            <div className="portfolio-side-line" />

            <div className="portfolio-container">

                {/* ================= HEADER ================= */}
                <motion.header
                    className="portfolio-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="portfolio-header-left">
                        <span className="portfolio-label">
                            03 / SELECTED WORK
                        </span>

                        <h2>
                            Art That Speaks
                            <br />
                            <em>For Itself.</em>
                        </h2>
                    </div>

                    <div className="portfolio-header-right">
                        <p>
                            A selection of custom artwork and creative projects crafted for gamers, streamers, VTubers, brands, and creators around the world.
                        </p>
                    </div>
                </motion.header>


                {/* ================= FEATURED PROJECT ================= */}
                <motion.article
                    className="portfolio-featured"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="portfolio-featured-image">
                        <img
                            src={featuredWork[0].character}
                            alt={featuredWork[0].title}
                        />

                        <div className="portfolio-image-shade" />

                        <span className="portfolio-featured-number">
                            01
                        </span>

                        <div className="portfolio-featured-category">
                            {featuredWork[0].category}
                        </div>
                    </div>

                    <div className="portfolio-featured-info">
                        <div>
                            <span>FEATURED PROJECT</span>

                            <h3>
                                {featuredWork[0].title}
                            </h3>
                        </div>

                        <p>
                            {featuredWork[0].description}
                        </p>

                        <a href={featuredWork[0].link}>
                            VIEW PROJECT
                            <MoveUpRight size={16} />
                        </a>
                    </div>
                </motion.article>


                {/* ================= PROJECT INTRO ================= */}
                <div className="portfolio-project-intro">
                    <span>
                        02 — 04
                    </span>

                    <p>
                        More selected work
                    </p>

                    <div />
                </div>


                {/* ================= SECONDARY WORK ================= */}
                <div className="portfolio-secondary-grid">

                    {featuredWork.slice(1, featuredWork.length - 1).map((work, index) => (
                        <motion.article
                            className={`portfolio-secondary portfolio-secondary-${index + 1}`}
                            key={work.id}
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="portfolio-secondary-image">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                />

                                <div className="portfolio-secondary-overlay" />

                                <span className="portfolio-secondary-number">
                                    {work.id}
                                </span>

                                <div className="portfolio-secondary-hover">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <div className="portfolio-secondary-info">
                                <div>
                                    <span>
                                        {work.category}
                                    </span>

                                    <h3>
                                        {work.title}
                                    </h3>
                                </div>

                                <p>
                                    {work.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}

                </div>


                {/* ================= FINAL PROJECT ================= */}
                <motion.article
                    className="portfolio-final"
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="portfolio-final-image">
                        <video
                            src={featuredWork[3].character}
                            type="video/mp4"
                            autoPlay
                            muted
                            loop
                            controls={false}
                        />

                        <div className="portfolio-final-overlay" />

                        <span>04</span>

                        <div className="portfolio-final-content">
                            <small>
                                {featuredWork[3].category}
                            </small>

                            <h3>
                                {featuredWork[3].title}
                            </h3>

                            <a href={featuredWork[3].link}>
                                EXPLORE
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </motion.article>


                {/* ================= CTA ================= */}
                <motion.div
                    className="portfolio-bottom"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="portfolio-bottom-line" />

                    <div className="portfolio-bottom-content">
                        <span>
                            HAVE A PROJECT IN MIND?
                        </span>

                        <a href="/portfolio">
                            EXPLORE ALL WORK
                            <ArrowUpRight size={20} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
