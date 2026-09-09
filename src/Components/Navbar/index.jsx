import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./style.css";

const categories = [
    "Character Art",
    "Posters",
    "Social Media",
    "Typography",
    "Illustration",
    "Photo Manipulation",
    "Digital Art",
    "Digital Art",
    "Digital Art",
    "Digital Art",
];

const Navbar = () => {
    return (
        <motion.header
            className="navbar"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <div className="navbar-inner">

                {/* BRAND */}
                <a href="#home" className="navbar-brand">
                    <div className="navbar-logo">
                        AW
                    </div>

                    <div className="navbar-brand-text">
                        <span>ARTISTRY</span>
                        <span>WORLD</span>
                    </div>
                </a>


                {/* CATEGORY SLIDER */}
                <div className="category-wrapper">

                    <div className="category-fade category-fade-left" />

                    <div className="category-slider">

                        <div className="category-track">

                            {categories.map((category, index) => (
                                <motion.a
                                    key={category}
                                    href={`#category-${index}`}
                                    className="category-item"

                                    whileHover={{
                                        y: -2,
                                    }}

                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                >

                                    <span className="category-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="category-name">
                                        {category}
                                    </span>

                                    <ArrowRight
                                        className="category-arrow"
                                        size={13}
                                    />

                                </motion.a>
                            ))}

                        </div>

                    </div>

                    <div className="category-fade category-fade-right" />

                </div>

            </div>
        </motion.header>
    );
};

export default Navbar;