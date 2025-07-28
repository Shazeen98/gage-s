import React from 'react';
import './HowitWorks.css';
import { motion } from 'framer-motion';


const steps = [
    {
        icon: (
            <svg height="40" width="40" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="17" width="4" height="4" rx="2" /><rect x="7" y="11" width="4" height="10" rx="2" /><rect x="12" y="7" width="4" height="14" rx="2" /><rect x="17" y="2" width="4" height="19" rx="2" />
            </svg>
        ),
        title: "Consultation",
        desc: "Tell us what protection you need. We listen first.",
    },
    {
        icon: (
            <svg height="40" width="40" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                <rect x="2" y="21" width="4" height="2" rx="1" /><rect x="10" y="21" width="4" height="2" rx="1" /><rect x="18" y="21" width="4" height="2" rx="1" />
            </svg>
        ),
        title: "Custom Plan",
        desc: "We design a strategy tailored to your property, team, or risks.",
    },
    {
        icon: (
            <svg height="40" width="40" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M22 12h-2" /><path d="M4 12H2" /><path d="M17.657 6.343l-1.414 1.414" /><path d="M6.343 17.657l-1.414 1.414" /><path d="M17.657 17.657l-1.414-1.414" /><path d="M6.343 6.343L4.929 7.757" />
            </svg>
        ),
        title: "Deployment & Support",
        desc: "Our team implements, trains, and protects with precision.",
    },
];

export default function HowItWorks() {
    return (
        <div className="how-steps-bg">
            <div className="how-steps-container">
                <motion.h2
                    className="how-title"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.6 }}
                >
                    HOW WE SECURE YOU IN 3 STEPS:
                </motion.h2>

                <div className="steps-layout">
                    {/* First card: slides in from left */}
                    <motion.div
                        className="step-card"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="step-icon">{steps[0].icon}</div>
                        <div>
                            <div className="step-title">{steps[0].title}</div>
                            <div className="step-desc">{steps[0].desc}</div>
                        </div>
                    </motion.div>

                    {/* Second card: slides in from right */}
                    <motion.div
                        className="step-card"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="step-icon">{steps[1].icon}</div>
                        <div>
                            <div className="step-title">{steps[1].title}</div>
                            <div className="step-desc">{steps[1].desc}</div>
                        </div>
                    </motion.div>
                </div>

                <div className="steps-layout">
                    {/* Third card: fades in from below */}
                    <motion.div
                        className="step-card step-card-wide"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="step-icon">{steps[2].icon}</div>
                        <div>
                            <div className="step-title">{steps[2].title}</div>
                            <div className="step-desc">{steps[2].desc}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
