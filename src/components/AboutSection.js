// src/components/AboutSection.js
import React from "react";
import "./AboutSection.css"; // CSS file for styles
import { motion } from 'framer-motion';
import aboutLottie from "../assets/lottietest.json"; // adjust the path if needed


export default function AboutSection() {
    return (

        <section className="about-section">


            <div
                className="about-inner"
            >
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, delay: 0.4}}
                    viewport={{once: true, amount: 0.5}}
                    className="about-left">
                    <h1>
                        MALDIVES–BASED.<br/>
                        GLOBALLY–MINDED.
                    </h1>
                    <p className="about-desc">
                        Founded with a vision to raise protection standards in the region, GAGE delivers globally
                        benchmarked solutions — backed by trained professionals, advanced systems, and real-world
                        results.
                    </p>
                    <a className="about-link" href="/about-us">
                        <b>More About Us</b> <span className="arrow">→</span>
                    </a>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 10}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.7, delay: 0.4}}
                    viewport={{once: true, amount: 0.5}}
                    className="about-right"
                >
                    <video
                        src="/videos/globev.mp4"       // put your video in public/videos/
                        className="about-video"                 // you can reuse your CSS or make a new class
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        {/* fallback for older browsers */}
                        Your browser does not support the video tag.
                    </video>
                </motion.div>

            </div>

        </section>
    );
}
