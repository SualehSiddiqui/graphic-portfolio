import { motion } from "framer-motion";
import {
    ArrowUpRight,
    MoveUpRight,
} from "lucide-react";

import "./style.css";

const services = [
    {
        id: "01",
        title: "2D & Illustration",
        short: "2D & ILLUSTRATION",
        description:
            "Character Design, Portraits, Reference Sheets, Concept Art, Storybook / Comic Illustration, Expressions & Emotes",
    },
    {
        id: "02",
        title: "Gaming & Streaming",
        short: "GAMING & STREAMING",
        description:
            "Gaming Logos, Stream Packs, Overlays, Panels, Thumbnails, Banners, Emotes and Creator Graphics.",
    },
    {
        id: "03",
        title: "Animation",
        short: "ANIAMTION",
        description:
            "2D Animation, Animated Wallpapers, Logo Animation, Character Animation and Promotional Motion.",
    },
    {
        id: "04",
        title: "3D / STL",
        short: "3D / STL",
        description:
            "3D Character Design, Printable Models, STL Files, Custom Sculpting and 3D Assets.",
    },
    {
        id: "05",
        title: "Branding",
        short: "BRANDING",
        description:
            "Logos, Visual Identity, Social Media Graphics and supporting creative assets.",
    },
    {
        id: "06",
        title: "Custom Projects",
        short: "CUSTOM PROJECTS",
        description:
            "If it is not listed, clients can still contact the studio with a brief and references.",
    },
];

const rowVariants = {
    hidden: {
        opacity: 0,
        y: 45,
    },

    visible: (index) => ({
        opacity: 1,
        y: 0,

        transition: {
            delay: index * 0.08,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const Services = () => {
    return (
        <section
            className="services-section"
            id="services"
        >

            {/* =========================================
                BACKGROUND ELEMENTS
            ========================================= */}

            <div className="services-orb services-orb-one" />
            <div className="services-orb services-orb-two" />

            <div className="services-background-text">
                SERVICES
            </div>


            {/* =========================================
                CONTAINER
            ========================================= */}

            <div className="services-container">

                {/* =====================================
                    HEADER
                ===================================== */}

                <motion.div
                    className="services-header"
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >

                    <div className="services-header-left">

                        <span className="services-eyebrow">
                            02 — WHAT WE DO
                        </span>

                        <h2>
                            Creative Services,
                            <br />
                            <span>Crafted With Purpose.</span>
                        </h2>

                    </div>


                    <div className="services-header-right">

                        <p>
                            From digital illustration and gaming artwork to animation, 3D design, branding, and custom projects, we create thoughtful visuals tailored to every client’s vision.
                        </p>

                    </div>

                </motion.div>


                {/* =====================================
                    SERVICE LIST
                ===================================== */}

                <div className="services-list">

                    {services.map((service, index) => (

                        <motion.div
                            key={service.id}
                            className="service-row"
                            custom={index}
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.15,
                            }}
                        >

                            {/* NUMBER */}

                            <div className="service-number">
                                {service.id}
                            </div>


                            {/* MAIN CONTENT */}

                            <div className="service-main">

                                <span className="service-short">
                                    {service.short}
                                </span>

                                <h3>
                                    {service.title}
                                </h3>

                                <p className="service-description">
                                    {service.description}
                                </p>

                            </div>

                            {/* HOVER NUMBER */}

                            <motion.div
                                className="service-hover-number"
                                initial={{
                                    opacity: 0,
                                    scale: 0.7,
                                    rotate: -20,
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                }}
                            >
                                {service.id}
                            </motion.div>

                        </motion.div>

                    ))}

                </div>


                {/* =====================================
                    BOTTOM
                ===================================== */}

                <motion.div
                    className="services-bottom"
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.4,
                    }}
                >

                    <span>
                        FROM IDEA
                    </span>

                    <div className="services-line" />

                    <span>
                        TO EXPERIENCE
                    </span>

                </motion.div>

            </div>

        </section>
    );
};

export default Services;