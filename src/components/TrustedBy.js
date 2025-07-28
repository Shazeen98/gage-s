import React from 'react';
import './TrustedBy.css';
import { motion } from 'framer-motion';

// Dynamically import all images from src/assets/images
const importAll = (r) => r.keys().map(r);
const logos = importAll(
    require.context('../assets/images/trustedby', false, /\.(png|jpe?g|svg)$/)
);


export default function TrustedBy() {
    const allLogos = [...logos, ...logos]; // For loop animation effect

    return (
        <div className="trusted-wrapper">
            <section className="trusted-marquee">
                <div className="trusted-content">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="trustedby-title"
                    >
                        <h2>TRUSTED BY MALDIVES' TOP RESORTS, CORPORATES & INSTITUTIONS</h2>
                    </motion.div>

                    <div className="marquee-track">
                        {allLogos.map((src, i) => (
                            <div className="marquee-item" key={i}>
                                <img src={src} alt={`Client logo ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
