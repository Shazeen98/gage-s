import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { motion } from 'framer-motion';

// === AnimatedText Utility Function ===
function AnimatedText({ text, className = "", delay = 0 }) {
    const letters = text.split('');
    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.035,
                delayChildren: delay,
            },
        },
    };
    const child = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
    };

    return (
        <span
            className={className}
            style={{ display: "inline-block", whiteSpace: "pre" }}

        >
            {letters.map((letter, i) => (
                <span
                    key={i}
                    style={{ display: "inline-block" }}
                >
                    {letter}
                </span>
            ))}
        </span>
    );
}

// === Social Icons Animation Variants ===
const iconParent = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18 },
    },
};
const iconChild = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
const shakeTransition = (delay) => ({
    x: [0, -5, 5, -4, 4, 0],
    transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 1.8,
        ease: "easeInOut",
        delay,
    }
});

// === Footer Component ===
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* Social Icons */}
                <div
                    className="footer-social"

                >
                    <a
                        href="https://www.linkedin.com/search/results/all/?keywords=gage%20fire%20safety&origin=GLOBAL_SEARCH_HEADER&sid=9(x"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"

                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://web.facebook.com/GAGE.FireSafety"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"

                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/gagefiresafetypvtltd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"

                    >
                        <FaInstagram />
                    </a>
                </div>
                {/* Animated Footer Text */}
                <div
                    className="footer-inline-row"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <AnimatedText
                        text="H. Noomuraka, 1st Floor Hadheebeemagu, Malé, Maldives | +960 3304055 | info@gage.com.mv"
                        delay={0.25}
                    />
                    <span className="footer-divider">&nbsp;|&nbsp;</span>
                    <AnimatedText
                        text="© 2025 Gage PVT Ltd. All rights reserved. "
                        delay={0.55}
                    />
                    <a href="/privacy-policy" style={{ marginLeft: 4 }}>
                        <AnimatedText text="Privacy Policy" delay={1} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
