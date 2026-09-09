import "./style.css";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="aw-contact" id="contact">

            {/* Background */}
            <div className="contact-grid" />
            <div className="contact-noise" />

            <div className="contact-glow contact-glow-one" />
            <div className="contact-glow contact-glow-two" />

            {/* Top label */}
            <motion.div
                className="contact-kicker"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="contact-line" />
                <span>HAVE AN IDEA?</span>
                <span className="contact-line" />
            </motion.div>


            {/* Main heading */}
            <motion.h2
                className="contact-title"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                LET'S MAKE
                <span>IT VISUAL.</span>
            </motion.h2>


            {/* Description */}
            <motion.p
                className="contact-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.25,
                }}
            >
                Have a concept, campaign or idea that deserves
                to be seen? Let's turn it into something memorable.
            </motion.p>


            {/* CTA */}
            <motion.a
                href="mailto:hello@artistryworld.com"
                className="contact-button"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                }}
                whileHover="hover"
            >

                <span className="contact-button-text">
                    START A CONVERSATION
                </span>

                <motion.span
                    className="contact-button-icon"
                    variants={{
                        hover: {
                            rotate: 45,
                        },
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowUpRight size={22} strokeWidth={1.5} />
                </motion.span>

            </motion.a>


            {/* Floating coordinates */}
            <div className="contact-coordinate contact-coordinate-left">
                <span>AW / 01</span>
                <span>CREATIVE DIRECTION</span>
            </div>

            <div className="contact-coordinate contact-coordinate-right">
                <span>LET'S BUILD</span>
                <span>SOMETHING DIFFERENT</span>
            </div>

        </section>
    );
}