import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Dices,
    Radio,
    Gamepad2,
} from "lucide-react";
import "./style.css";

const categories = [
    {
        number: "01",
        title: "D&D / TTRPG",
        short: "TABLETOP WORLDS",
        description:
            "Characters, parties, campaigns and custom visuals built to make your tabletop world feel real.",
        icon: Dices,
        items: [
            "Characters",
            "Party Art",
            "Campaign Art",
            "Tokens",
            "Maps",
            "Adventure Illustrations",
            "Custom Visuals",
        ],
    },
    {
        number: "02",
        title: "Streamers",
        short: "CREATOR WORLDS",
        description:
            "A complete visual identity for creators who want their stream to look as memorable as their content.",
        icon: Radio,
        items: [
            "Logos",
            "Overlays",
            "Panels",
            "Emotes",
            "Thumbnails",
            "Banners",
            "Animated Graphics",
        ],
    },
    {
        number: "03",
        title: "Game Creators",
        short: "DIGITAL WORLDS",
        description:
            "From early concepts to polished assets, we help turn game ideas into visual worlds.",
        icon: Gamepad2,
        items: [
            "Characters",
            "Concepts",
            "Game Assets",
            "UI Graphics",
            "Promotional Artwork",
            "3D Assets",
        ],
    },
];

const reveal = {
    hidden: {
        opacity: 0,
        y: 35,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function ForGamers() {
    return (
        <section className="for-gamers" id="for-gamers">

            {/* Background */}
            <div className="gamers-bg-number">
                04
            </div>

            <div className="gamers-container">

                {/* =================================================
                    HEADER
                ================================================= */}

                <motion.div
                    className="gamers-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    variants={reveal}
                >

                    <div className="gamers-header-left">
                        <div className="gamers-eyebrow">
                            <span className="eyebrow-dot" />
                            04 — FOR GAMERS
                        </div>

                        <h2>
                            Built For
                            <br />
                            <span>Your Vision.</span>
                        </h2>
                    </div>


                    <div className="gamers-header-right">

                        <span className="gamers-index">
                            04 / 04
                        </span>

                        <p>
                            Visuals for creators, gamers, streamers, and storytellers bringing their ideas, characters, and digital worlds to life.
                        </p>

                    </div>

                </motion.div>


                {/* =================================================
                    INTRO
                ================================================= */}

                <motion.div
                    className="gamers-intro"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    variants={reveal}
                >

                    <span>
                        WHAT WE CREATE
                    </span>

                    <p>
                        From custom characters and illustrations to gaming assets, streaming visuals, animations, and 3D creations, we craft artwork that gives every project a distinct visual identity.
                    </p>

                </motion.div>


                {/* =================================================
                    CATEGORY LIST
                ================================================= */}

                <div className="gamers-list">

                    {categories.map((category, index) => {

                        const Icon = category.icon;

                        return (
                            <motion.article
                                className="gamer-row"
                                key={category.number}

                                initial="hidden"
                                whileInView="visible"

                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}

                                variants={reveal}

                                transition={{
                                    delay: index * 0.08,
                                }}
                            >

                                {/* Number */}

                                <div className="gamer-number">
                                    {category.number}
                                </div>


                                {/* Main */}

                                <div className="gamer-main">

                                    <div className="gamer-title-line">

                                        <span className="gamer-short">
                                            {category.short}
                                        </span>

                                        <div className="gamer-icon">
                                            <Icon
                                                size={18}
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                    </div>


                                    <h3>
                                        {category.title}
                                    </h3>


                                    <p className="gamer-description">
                                        {category.description}
                                    </p>


                                    <div className="gamer-items">

                                        {category.items.map((item) => (
                                            <span key={item}>
                                                {item}
                                            </span>
                                        ))}

                                    </div>

                                </div>


                                {/* Arrow */}

                                <div className="gamer-arrow">
                                    <ArrowUpRight size={20} />
                                </div>


                                {/* Background number */}

                                <div className="gamer-watermark">
                                    {category.number}
                                </div>

                            </motion.article>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}