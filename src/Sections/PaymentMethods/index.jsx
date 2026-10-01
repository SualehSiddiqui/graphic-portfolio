import React from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    CreditCard,
    Wallet,
    Apple,
    CircleDollarSign,
} from "lucide-react";
import "./style.css";

const paymentMethods = [
    {
        name: "PayPal",
        icon: Wallet,
    },
    {
        name: "Stripe",
        icon: CreditCard,
    },
    {
        name: "Apple Pay",
        icon: Apple,
    },
    {
        name: "Cash App",
        icon: CircleDollarSign,
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

export default function PaymentMethods() {
    return (
        <section className="payment-section" id="payment-methods">

            <div className="payment-bg-number">07</div>

            <div className="payment-container">

                {/* HEADER */}
                <motion.div
                    className="payment-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={reveal}
                >
                    <div className="payment-header-left">

                        <div className="payment-eyebrow">
                            <span className="payment-dot" />
                            07 — PAYMENT
                        </div>

                        <h2>
                            SIMPLE.
                            <br />
                            <span>SECURE.</span>
                        </h2>

                    </div>

                    <div className="payment-header-right">

                        <span className="payment-index">
                            07 / 07
                        </span>

                        <p>
                            Flexible payment options to make starting
                            your project simple and convenient.
                        </p>

                    </div>
                </motion.div>


                {/* PAYMENT AREA */}
                <motion.div
                    className="payment-area"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >

                    <div className="payment-intro">
                        <span>HOW YOU CAN PAY</span>

                        <div className="payment-intro-line" />

                        <span>AVAILABLE METHODS</span>
                    </div>


                    <div className="payment-grid">

                        {paymentMethods.map((method, index) => {
                            const Icon = method.icon;

                            return (
                                <motion.div
                                    key={method.name}
                                    className="payment-card"
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.25,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                >

                                    <div className="payment-card-top">
                                        <span>
                                            0{index + 1}
                                        </span>

                                        <ArrowUpRight
                                            size={18}
                                            className="payment-card-arrow"
                                        />
                                    </div>

                                    <div className="payment-card-icon">
                                        <Icon
                                            size={32}
                                            strokeWidth={1.3}
                                        />
                                    </div>

                                    <h3>{method.name}</h3>

                                    <div className="payment-card-line" />

                                    <span className="payment-card-label">
                                        ACCEPTED
                                    </span>

                                </motion.div>
                            );
                        })}

                    </div>

                </motion.div>


                {/* BOTTOM */}
                <motion.div
                    className="payment-footer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span>YOUR PROJECT</span>

                    <div className="payment-footer-line" />

                    <span>YOUR WAY</span>
                </motion.div>

            </div>
        </section>
    );
}