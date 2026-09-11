import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "../../assets/logo.png"
import "./style.css";

const categories = [
    {
        name: "Character Artworks",
        id: "character-artworks"
    },
    {
        name: "DND Group Artworks",
        id: "dnd-group-artworks"
    },
    {
        name: "Landscape Art Scenes",
        id: "landscape-art-scenes"
    },
    {
        name: "Logos and Banners",
        id: "logos-and-banners"
    },
    {
        name: "2D/3D Models",
        id: "2d-3d-models"
    },
    {
        name: "Printable Model",
        id: "printable-model"
    },
    {
        name: "Reference Sheet",
        id: "reference-sheet"
    },
    {
        name: "Twitch Package",
        id: "twitch-package"
    },
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
                    <img src={Logo} alt="Logo" className="navbar-logo" />
                </a>

                {/* CATEGORY SLIDER */}
                <div className="category-wrapper">
                    <div className="category-fade category-fade-left" />
                    <div className="category-slider">
                        <div className="category-track">
                            {categories.map((category, index) => (
                                <motion.a
                                    key={category.id}
                                    href={`#${category.id}`}
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
                                        {category.name}
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