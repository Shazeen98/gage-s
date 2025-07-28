
// CallToAction.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './CallToAction.css';
import guards from '../assets/images/guards.png' ;

const bgVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function CallToAction() {
    return (
        <motion.section
            className="call-to-action"
            variants={bgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
        >
            <motion.div
                className="call-to-action__image-container"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <img
                    src={guards}
                    alt="Our Security Guards"
                    className="call-to-action__image"
                />
            </motion.div>

            <motion.div
                className="call-to-action__content"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h2 className="call-to-action__title">
                    READY TO SECURE YOUR <br /> BUSINESS OR TEAM?
                </h2>
                <div className="call-to-action__text">
                    Let’s build a protection plan that fits you perfectly.
                </div>
                <a
                    href="/contact-us"
                    className="call-to-action__button"
                >
                    REQUEST A CALLBACK
                </a>
            </motion.div>
        </motion.section>
    );
}
