import "./style.css";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    ArrowUp,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {

    const socialLinks = [
        {
            name: "Instagram",
            icon: <FaInstagram size={16} />,
            url: "#",
        },
        {
            name: "Twitter",
            icon: <FaXTwitter size={16} />,
            url: "#",
        },
    ];


    const footerLinks = [
        {
            label: "Portfolio",
            target: "#portfolio",
        },
        {
            label: "Contact",
            target: "#contact",
        },
    ];


    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <footer className="aw-footer">

            {/* Background */}
            <div className="footer-grid" />
            <div className="footer-noise" />

            <div className="footer-glow footer-glow-one" />
            <div className="footer-glow footer-glow-two" />


            {/* Brand */}
            <section className="footer-brand">

                <div className="footer-brand-top">

                    <span>
                        CREATIVE STUDIO
                    </span>


                    <div className="footer-orbit">

                        <div className="orbit-ring orbit-ring-one" />

                        <div className="orbit-ring orbit-ring-two" />

                        <div className="orbit-core">
                            AW
                        </div>

                    </div>


                    <span>
                        EST. 2026
                    </span>

                </div>


                {/* Giant brand marquee */}
                <motion.div
                    className="brand-marquee"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >

                    <div className="brand-track">

                        <span>ARTISTRY</span>

                        <span>WORLD</span>

                        <span className="brand-dot">
                            ✦
                        </span>


                        <span>ARTISTRY</span>

                        <span>WORLD</span>

                        <span className="brand-dot">
                            ✦
                        </span>


                        <span>ARTISTRY</span>

                        <span>WORLD</span>

                        <span className="brand-dot">
                            ✦
                        </span>

                    </div>

                </motion.div>

            </section>


            {/* Information */}
            <section className="footer-info">

                <div className="footer-info-left">

                    <p className="footer-label">
                        NAVIGATE
                    </p>

                    <div className="footer-links">

                        {footerLinks.map((link, index) => (

                            <a
                                key={index}
                                href={link.target}
                            >

                                <span>
                                    {link.label}
                                </span>

                                <ArrowUpRight size={13} />

                            </a>

                        ))}

                    </div>

                </div>


                {/* Social */}
                <div className="footer-info-center">

                    <p className="footer-label">
                        FOLLOW THE WORK
                    </p>

                    <div className="social-links">

                        {socialLinks.map((social, index) => (

                            <a
                                key={index}
                                href={social.url}
                                className="social-link"
                                aria-label={social.name}
                            >

                                <span className="social-icon">
                                    {social.icon}
                                </span>

                                <span className="social-name">
                                    {social.name}
                                </span>

                                <ArrowUpRight
                                    size={13}
                                    className="social-arrow"
                                />

                            </a>

                        ))}

                    </div>

                </div>


                {/* Back to top */}
                <button
                    className="back-top"
                    onClick={handleScrollTop}
                    aria-label="Back to top"
                >

                    <span>
                        BACK TO TOP
                    </span>

                    <span className="back-top-icon">
                        <ArrowUp size={17} />
                    </span>

                </button>

            </section>


            {/* Bottom */}
            <section className="footer-bottom">

                <div className="footer-bottom-left">
                    © {new Date().getFullYear()} ARTISTRY WORLD
                </div>

                <div className="footer-bottom-center">
                    DESIGNED TO BE SEEN.
                </div>

                <div className="footer-bottom-right">
                    ALL RIGHTS RESERVED.
                </div>

            </section>


            {/* Bottom ticker */}
            <div className="footer-ticker">

                <div className="ticker-track">

                    <span>DESIGN</span>
                    <i>✦</i>

                    <span>ART</span>
                    <i>✦</i>

                    <span>VISUALS</span>
                    <i>✦</i>

                    <span>IDEAS</span>
                    <i>✦</i>

                    <span>DESIGN</span>
                    <i>✦</i>

                    <span>ART</span>
                    <i>✦</i>

                    <span>VISUALS</span>
                    <i>✦</i>

                    <span>IDEAS</span>
                    <i>✦</i>

                </div>

            </div>

        </footer>
    );
}