import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TypewriterOnScroll from './TypewriterOnScroll';
import './Hero.css';
import bg from './images/herobackground.jpg';

export default function Hero() {
    return (
        <section
            className="hero-bg section-space"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
            >
                <h1 className="hero-title">YOUR SAFETY, OUR MISSION</h1>
                <p className="hero-desc">
                    GAGE protects what matters most — from elite security teams<br />
                    to advanced fire systems and life-saving first aid training.
                </p>
            </motion.div>

            <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
                <Link to="/contact-us">
                    <button className="btn">TALK TO A SPECIALIST</button>
                </Link>
                <Link to="/gage-security">
                    <button className="btn secondary">BROWSE ALL SERVICES</button>
                </Link>
            </motion.div>


        </section>
    );
}
