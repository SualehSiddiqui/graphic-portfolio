import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    AlertCircle,
    ArrowUpRight,
    Check,
    FileText,
    Mail,
    X,
} from "lucide-react";

import "./style.css";

export default function OfficialNotice({
    isOpen,
    onClose,
}) {
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (!isOpen) return;

        const originalOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow =
                originalOverflow;
        };
    }, [isOpen]);

    const handleBackdropClick = (event) => {
        if (
            event.target === event.currentTarget
        ) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="official-notice-overlay"
                    onMouseDown={handleBackdropClick}
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
                        duration: 0.28,
                        ease: "easeOut",
                    }}
                >
                    <motion.div
                        className="official-notice"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="official-notice-title"
                        aria-describedby="official-notice-description"
                        initial={{
                            opacity: 0,
                            y: 28,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 18,
                            scale: 0.97,
                        }}
                        transition={{
                            duration: 0.42,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="official-notice-accent" />

                        <button
                            type="button"
                            className="official-notice-close"
                            onClick={onClose}
                            aria-label="Close notice"
                        >
                            <X size={18} />
                        </button>

                        {/* HEADER */}

                        <div className="official-notice-header">
                            <div className="official-notice-icon">
                                <AlertCircle size={19} />
                            </div>

                            <div>
                                <span className="official-notice-eyebrow">
                                    IMPORTANT NOTICE
                                </span>

                                <h2 id="official-notice-title">
                                    A quick note
                                    <br />
                                    <span>
                                        before you proceed.
                                    </span>
                                </h2>
                            </div>
                        </div>

                        <p
                            id="official-notice-description"
                            className="official-notice-intro"
                        >
                            To help keep your experience secure
                            and ensure that every project is handled
                            correctly, please keep the following
                            information in mind.
                        </p>

                        {/* NOTICE ITEMS */}

                        <div className="official-notice-items">

                            {/* 01 */}

                            <div className="official-notice-item">
                                <div className="notice-item-number">
                                    01
                                </div>

                                <div className="notice-item-content">
                                    <h3>
                                        Official websites
                                    </h3>

                                    <p>
                                        We operate only through
                                        our two official websites.
                                    </p>

                                    <div className="official-links">
                                        <a
                                            href="https://abc.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                abc.com
                                            </span>

                                            <ArrowUpRight
                                                size={14}
                                            />
                                        </a>

                                        <a
                                            href="https://def.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>
                                                def.com
                                            </span>

                                            <ArrowUpRight
                                                size={14}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 02 */}

                            <div className="official-notice-item">
                                <div className="notice-item-number">
                                    02
                                </div>

                                <div className="notice-item-content">
                                    <h3>
                                        Follow the official process
                                    </h3>

                                    <p>
                                        Please follow the working
                                        process described on our
                                        website. For everyone's
                                        protection, we recommend
                                        not proceeding with requests
                                        outside that process.
                                    </p>
                                </div>
                            </div>

                            {/* 03 */}

                            <div className="official-notice-item">
                                <div className="notice-item-number">
                                    03
                                </div>

                                <div className="notice-item-content">
                                    <h3>
                                        Contact & social channels
                                    </h3>

                                    <p>
                                        For questions, updates, or
                                        verification, please use the
                                        contact information and social
                                        channels listed on our official
                                        websites.
                                    </p>

                                    <div className="notice-contact">
                                        <a
                                            href="mailto:info@artistryworlds.com"
                                        >
                                            <Mail size={14} />

                                            <span>
                                                Official Email
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* 04 */}

                            <div className="official-notice-item notice-important">
                                <div className="notice-item-number">
                                    04
                                </div>

                                <div className="notice-item-content">
                                    <h3>
                                        Asked to bypass the process?
                                    </h3>

                                    <p>
                                        If someone asks you to break,
                                        bypass, or change our official
                                        working process, please contact
                                        us through our official email
                                        before taking any action.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* POLICY LINK */}

                        <div className="official-notice-policy-link">
                            <div className="official-notice-policy-info">

                                <div className="official-notice-policy-icon">
                                    <FileText size={16} />
                                </div>

                                <div>
                                    <span className="official-notice-policy-label">
                                        BEFORE YOU PROCEED
                                    </span>

                                    <p>
                                        Please read our complete
                                        policies, including payment,
                                        refund, cancellation, and
                                        AI-generated work policies.
                                    </p>
                                </div>

                            </div>

                            <a
                                href="/policies"
                                className="official-notice-policy-button"
                            >
                                <span>
                                    READ OUR POLICIES
                                </span>

                                <ArrowUpRight size={15} />
                            </a>
                        </div>

                        {/* FOOTER */}

                        <div className="official-notice-footer">

                            <div className="notice-security">
                                <div>
                                    <Check size={14} />
                                </div>

                                <span>
                                    Your safety and a clear
                                    working process matter to us.
                                </span>
                            </div>

                            <button
                                type="button"
                                className="notice-understand"
                                onClick={onClose}
                            >
                                <span>
                                    I UNDERSTAND
                                </span>

                                <ArrowUpRight size={17} />
                            </button>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}