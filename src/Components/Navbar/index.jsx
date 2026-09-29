import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    X,
    Menu,
    ArrowUpRight,
} from "lucide-react";

import Logo from "../../assets/logo.png";

import "./style.css";
import { Link, useLocation } from "react-router-dom";

const categories = [
    {
        name: "Character Artworks",
        id: "character-artworks",
    },
    {
        name: "Party Artworks",
        id: "party-artworks",
    },
    {
        name: "DND Character Sheet",
        id: "dnd-character-sheet",
    },
    {
        name: "DNDPortrait",
        id: "dnd-portrait",
    },
    {
        name: "Landscape Art Scenes",
        id: "landscape-art-scenes",
    },
    {
        name: "Logos and Banners",
        id: "logos-and-banners",
    },
    {
        name: "3D Universe",
        id: "3d-universe",
    },
    {
        name: "Printable Model",
        id: "printable-model",
    },
    {
        name: "Reference Sheet",
        id: "reference-sheet",
    },
    {
        name: "Twitch Package",
        id: "twitch-package",
    },
    {
        name: "VR World",
        id: "vr-world",
    },
    {
        name: "OC Design",
        id: "oc-design",
    },
];

const navLinks = [
    {
        name: "Services",
        link: "/#services",
    },
    {
        name: "Portfolio",
        link: "/portfolio",
    },
    {
        name: "For Gamers",
        link: "/#for-gamers",
    },
    {
        name: "How We Work",
        link: "/#how-we-work",
    },
    {
        name: "Contact",
        link: "/#contact",
    },
    {
        name: "Payment Methods",
        link: "/#payment-methods",
    },
];

const menuVariants = {
    hidden: {
        x: "100%",
    },

    visible: {
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },

    exit: {
        x: "100%",
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        x: 35,
    },

    visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.12 + index * 0.055,
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const Navbar = () => {
    const location = useLocation();

    // Portfolio categories menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Mobile site navigation menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleMobileNavClick = () => {
        setMobileMenuOpen(false);
        setMenuOpen(false);
    };

    return (
        <>
            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <motion.header
                className="navbar"
                initial={{
                    opacity: 0,
                    y: -25,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <div className="navbar-inner">

                    {/* =================================================
                        LOGO
                    ================================================= */}

                    <Link
                        to="/"
                        className="navbar-brand"
                        onClick={() => {
                            closeMenu();
                            closeMobileMenu();
                        }}
                    >
                        <img
                            src={Logo}
                            alt="Artistry Worlds"
                            className="navbar-logo"
                        />
                    </Link>


                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================= */}

                    <nav className="main-nav">

                        {navLinks.map((item) => (
                            <motion.a
                                key={item.link}
                                href={item.link}
                                className="main-nav-link"
                                whileHover={{
                                    y: -2,
                                }}
                                whileTap={{
                                    scale: 0.96,
                                }}
                            >
                                <span>
                                    {item.name}
                                </span>

                                <ArrowUpRight
                                    size={13}
                                    className="nav-link-arrow"
                                />
                            </motion.a>
                        ))}

                    </nav>


                    {/* =================================================
                        PORTFOLIO CATEGORY BUTTON
                        Only visible on portfolio
                    ================================================= */}

                    {location.pathname === "/portfolio" && (
                        <motion.button
                            className={`menu-button ${menuOpen ? "active" : ""
                                }`}
                            onClick={() => {
                                setMenuOpen((prev) => !prev);
                                setMobileMenuOpen(false);
                            }}
                            whileTap={{
                                scale: 0.92,
                            }}
                            aria-label="Toggle portfolio categories"
                        >

                            <span className="menu-label">
                                {menuOpen ? "CLOSE" : "CATEGORIES"}
                            </span>

                            <span className="menu-icon">

                                <AnimatePresence mode="wait">

                                    {menuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                rotate: 90,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                        >
                                            <X size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{
                                                rotate: 90,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                rotate: 0,
                                                opacity: 1,
                                            }}
                                            exit={{
                                                rotate: -90,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                        >
                                            <Menu size={20} />
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                            </span>

                        </motion.button>
                    )}


                    {/* =================================================
                        MOBILE SITE MENU BUTTON
                        This is ALWAYS available on mobile
                    ================================================= */}

                    <motion.button
                        className={`mobile-menu-button ${mobileMenuOpen ? "active" : ""
                            }`}
                        onClick={() => {
                            setMobileMenuOpen((prev) => !prev);
                            setMenuOpen(false);
                        }}
                        whileTap={{
                            scale: 0.92,
                        }}
                        aria-label="Toggle mobile navigation"
                    >

                        <span className="mobile-menu-label">
                            {mobileMenuOpen ? "CLOSE" : "MENU"}
                        </span>

                        <span className="mobile-menu-icon">

                            <AnimatePresence mode="wait">

                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="mobile-close"
                                        initial={{
                                            rotate: -90,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            rotate: 90,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="mobile-menu"
                                        initial={{
                                            rotate: 90,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            rotate: 0,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            rotate: -90,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.25,
                                        }}
                                    >
                                        <Menu size={20} />
                                    </motion.div>
                                )}

                            </AnimatePresence>

                        </span>

                    </motion.button>

                </div>
            </motion.header>


            {/* =========================================================
                PORTFOLIO CATEGORY SLIDER
            ========================================================= */}

            <AnimatePresence>

                {menuOpen && location.pathname === "/portfolio" && (
                    <>
                        {/* BACKDROP */}

                        <motion.div
                            className="menu-backdrop"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.45,
                            }}
                            onClick={closeMenu}
                        />


                        {/* PANEL */}

                        <motion.aside
                            className="category-panel"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >

                            <div className="panel-glow panel-glow-purple" />
                            <div className="panel-glow panel-glow-pink" />

                            <div className="panel-content">

                                <div className="panel-header">

                                    <div>

                                        <span className="panel-eyebrow">
                                            EXPLORE THE WORK
                                        </span>

                                        <h2>
                                            Portfolio
                                            <br />
                                            Categories<span>.</span>
                                        </h2>

                                    </div>

                                    <span className="panel-number">
                                        08
                                    </span>

                                </div>


                                <div className="category-list">

                                    {categories.map(
                                        (category, index) => (
                                            <motion.a
                                                key={category.id}
                                                href={`#${category.id}`}
                                                className="category-item"
                                                custom={index}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                onClick={closeMenu}
                                                whileHover="hover"
                                            >

                                                <div className="category-index">
                                                    {String(
                                                        index + 1
                                                    ).padStart(2, "0")}
                                                </div>

                                                <div className="category-title">
                                                    {category.name}
                                                </div>

                                                <motion.div
                                                    className="category-arrow-wrap"
                                                    variants={{
                                                        hover: {
                                                            x: 5,
                                                            rotate: 45,
                                                        },
                                                    }}
                                                    transition={{
                                                        duration: 0.25,
                                                    }}
                                                >
                                                    <ArrowRight size={18} />
                                                </motion.div>

                                            </motion.a>
                                        )
                                    )}

                                </div>


                                <motion.div
                                    className="panel-footer"
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.65,
                                        duration: 0.5,
                                    }}
                                >

                                    <span>
                                        SELECTED WORKS
                                    </span>

                                    <span>
                                        2026 — ARTISTRY WORLD
                                    </span>

                                </motion.div>

                            </div>

                        </motion.aside>

                    </>
                )}

            </AnimatePresence>


            {/* =========================================================
                MOBILE SITE NAVIGATION SLIDER
            ========================================================= */}

            <AnimatePresence>

                {mobileMenuOpen && (
                    <>
                        {/* BACKDROP */}

                        <motion.div
                            className="mobile-nav-backdrop"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.4,
                            }}
                            onClick={closeMobileMenu}
                        />


                        {/* MOBILE PANEL */}

                        <motion.aside
                            className="mobile-nav-panel"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >

                            <div className="mobile-nav-content">

                                {/* HEADER */}

                                <div className="mobile-nav-header">

                                    <div>

                                        <span className="mobile-nav-eyebrow">
                                            ARTISTRY WORLDS
                                        </span>

                                        <h2 className="mobile-nav-title">
                                            Explore<span>.</span>
                                        </h2>

                                    </div>

                                    <button
                                        className="mobile-nav-close"
                                        onClick={closeMobileMenu}
                                        aria-label="Close navigation"
                                    >
                                        <X size={19} />
                                    </button>

                                </div>


                                {/* LINKS */}

                                <nav className="mobile-nav-links">

                                    {navLinks.map(
                                        (item, index) => (
                                            <motion.a
                                                key={item.link}
                                                href={item.link}
                                                className="mobile-nav-item"
                                                custom={index}
                                                variants={itemVariants}
                                                initial="hidden"
                                                animate="visible"
                                                onClick={
                                                    handleMobileNavClick
                                                }
                                            >

                                                <span className="mobile-nav-index">
                                                    {String(
                                                        index + 1
                                                    ).padStart(2, "0")}
                                                </span>

                                                <span className="mobile-nav-label">
                                                    {item.name}
                                                </span>

                                                <span className="mobile-nav-arrow">
                                                    <ArrowUpRight
                                                        size={15}
                                                    />
                                                </span>

                                            </motion.a>
                                        )
                                    )}

                                </nav>


                                {/* FOOTER */}

                                <div className="mobile-nav-footer">

                                    <span>
                                        NAVIGATION
                                    </span>

                                    <span>
                                        2026 — ARTISTRY WORLDS
                                    </span>

                                </div>

                            </div>

                        </motion.aside>

                    </>
                )}

            </AnimatePresence>
        </>
    );
};

export default Navbar;