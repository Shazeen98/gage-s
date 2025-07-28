import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ServiceOverview.css';
import gageLogoss from '../assets/images/gage_logoss.png';
import gagefire from '../assets/images/gagefire.png';
import gagetraining from '../assets/images/gagetraining.png';


const services = [
    { key: 'security', label: 'GAGE SECURITY', features: [
            'Armed/Unarmed Guards',
            '24/7 Patrol & Monitoring',
            'Surveillance & Intrusion Alerts'
        ], color: '#000', logo: gageLogoss },
    { key: 'fire', label: 'GAGE FIRE SAFETY', features: [
            'Fire Alarms',
            'Sprinkler Systems',
            'Emergency Planning & Drills'
        ], color: '#C61026', logo: gagefire },
    { key: 'training', label: 'GAGE INSTITUTE', features: [
            'First Aid & CPR',
            'Fire Safety Training',
            'Custom Emergency Response'
        ], color: '#2430CE', logo: gagetraining }
];

const parentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.8 } }
};

export default function ServicesOverview() {
    const [selected, setSelected] = useState('security');
    const current = services.find((s) => s.key === selected);

    return (
        <section className="services-section">
            <div className="services-divider" />

            <div className="services-overview">
                {/* Left column */}
                <motion.div
                    className="services-overview__left"
                    variants={parentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.4 }}
                >
                    <motion.div variants={childVariants}>
                        <div
                            className="service-card"
                            style={{ backgroundColor: current.color }}
                        >
                            <motion.h3 variants={childVariants}>
                                {current.label}
                            </motion.h3>

                            <ul>
                                {current.features.map((feature, i) => (
                                    <motion.li key={i} variants={childVariants}>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.img
                                variants={childVariants}
                                src={current.logo}
                                alt={current.label}
                                className="service-logo"
                            />
                        </div>
                    </motion.div>

                    <div className="tabs-list">
                        {services.map((s) => (
                            <motion.button
                                key={s.key}
                                className={`tab-button ${s.key === selected ? 'selected' : ''}`}
                                style={{ '--tab-bg': s.color }}
                                variants={childVariants}
                                onClick={() => setSelected(s.key)}
                                onMouseEnter={() => setSelected(s.key)}
                                onFocus={() => setSelected(s.key)}
                            >
                                {s.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Right column */}
                <motion.div
                    className="services-overview__right services-text"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <h2>COMPLETE PROTECTION UNDER ONE ROOF</h2>
                    <p>
                        Whether you’re safeguarding a hotel, equipping your team with first aid,
                        or fire-proofing your property — GAGE is your all-in-one partner.
                    </p>
                    <a href="/contact-us" className="explore-link">
                        Explore Our Solutions →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
