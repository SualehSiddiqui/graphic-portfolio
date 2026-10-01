import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Sparkles,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./style.css";
import { Link } from "react-router-dom";

const socials = [
    {
        name: "EMAIL",
        value: "info@artistryworlds.com",
        icon: Mail,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@artistryworlds.com",
        target: "_blank"
    },
    // {
    //     name: "DISCORD",
    //     value: "Join our community",
    //     icon: MessageCircle,
    //     href: "#",
    //     target: ""
    // },
    {
        name: "INSTAGRAM",
        value: "@artistryworldss",
        icon: FaInstagram,
        href: "https://www.instagram.com/artistryworldss",
        target: "_blank",
    },
    {
        name: "X / TWITTER",
        value: "@artistryworlds",
        icon: FaXTwitter,
        href: "https://x.com/artistryworlds",
        target: "_blank",
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
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Contact() {
    return (
        <section className="about-contact" id="contact">

            {/* Background */}
            <div className="about-contact-number">06</div>
            <div className="about-contact-glow" />

            <div className="about-contact-container">
                {/* ================= CONTACT ================= */}
                <motion.div
                    className="contact-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={reveal}
                >

                    <div className="contact-heading">

                        <div className="contact-label">
                            <Sparkles size={13} />
                            LET'S CREATE
                        </div>

                        <h2>
                            HAVE A PROJECT
                            <br />
                            <span>IN MIND?</span>
                        </h2>

                        <p>
                            Tell us what you want to create, and share your vision with us. From the first
                            idea to the final artwork, we'll work with you to bring it to life.
                        </p>
                    </div>


                    {/* Social / Contact links */}
                    <div className="contact-links">

                        {socials.map((social, index) => {
                            const Icon = social.icon;

                            return (
                                <Link
                                    key={social.name}
                                    to={social.href}
                                    target={social.target}
                                    className="contact-link"
                                    initial={{ opacity: 0, x: 25 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    <div className="contact-link-left">

                                        <div className="contact-icon">
                                            <Icon size={17} />
                                        </div>

                                        <div>
                                            <span className="contact-name">
                                                {social.name}
                                            </span>

                                            <span className="contact-value">
                                                {social.value}
                                            </span>
                                        </div>

                                    </div>

                                    <motion.div
                                        className="contact-arrow"
                                        whileHover={{
                                            x: 5,
                                            y: -5,
                                        }}
                                    >
                                        <ArrowUpRight size={20} />
                                    </motion.div>
                                </Link>
                            );
                        })}

                    </div>

                </motion.div>


                {/* ================= FINAL STATEMENT ================= */}
                <motion.div
                    className="about-contact-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span>ARTISTRY WORLDS</span>

                    <div className="footer-line" />

                    <span>
                        DESIGN · ART · MOTION · 3D
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
