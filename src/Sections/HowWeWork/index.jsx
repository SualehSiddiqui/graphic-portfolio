import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Lightbulb,
    MessageCircle,
    FileCheck,
    Palette,
    Send,
} from "lucide-react";
import "./style.css";

const steps = [
    {
        number: "01",
        title: "Tell Us About Your Idea",
        description:
            "Share your concept, references, requirements, and goals with us. Whether you have a detailed brief or just a rough idea, we'll help turn it into a clear creative direction.",
        icon: Lightbulb,
    },
    {
        number: "02",
        title: "Discuss the Project",
        description:
            "We'll discuss the scope, style, timeline, and budget to understand what you need and define a project plan that works for you before production begins.",
        icon: MessageCircle,
    },
    {
        number: "03",
        title: "Confirm & Get Started",
        description:
            "Once everything is agreed upon, we'll confirm the project details and payment arrangement. Your concept is then ready to become a finished piece of artwork.",
        icon: FileCheck,
    },
    {
        number: "04",
        title: "Production",
        description:
            "Our experienced artists bring your vision to life with precision and attention to detail, keeping the agreed direction at the center of every stage of production.",
        icon: Palette,
    },
    {
        number: "05",
        title: "Updates & Delivery",
        description:
            "You'll receive progress updates throughout the project and have the opportunity to provide feedback. Once approved, we'll deliver polished, ready-to-use artwork created specifically for your needs.",
        icon: Send,
    },
];

const fadeUp = {
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

export default function HowWeWork() {
    return (
        <section className="how-work" id="how-we-work">

            <div className="how-work-glow" />

            <div className="how-work-container">

                {/* HEADER */}
                <motion.div
                    className="how-work-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                >
                    <div>
                        <span className="how-work-eyebrow">
                            05 — HOW WE WORK
                        </span>

                        <h2>
                            FROM IDEA
                            <br />
                            <span>TO DELIVERY.</span>
                        </h2>
                    </div>

                    <p>
                        From your first idea to the final files, we make the creative process simple, transparent, and focused on delivering artwork you're proud to use.
                    </p>
                </motion.div>

                {/* PROCESS */}
                <div className="process-wrapper">

                    <div className="process-line">
                        <motion.div
                            className="process-line-progress"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 1.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        />
                    </div>

                    <div className="process-grid">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.article
                                    className={`process-step ${index % 2 === 1
                                        ? "process-step-offset"
                                        : ""
                                        }`}
                                    key={step.number}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    variants={fadeUp}
                                    transition={{
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="process-step-top">
                                        <span className="process-number">
                                            {step.number}
                                        </span>

                                        <div className="process-icon">
                                            <Icon size={20} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <div className="process-step-content">
                                        <span className="process-stage">
                                            STAGE {step.number}
                                        </span>

                                        <h3>{step.title}</h3>

                                        <p>{step.description}</p>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}