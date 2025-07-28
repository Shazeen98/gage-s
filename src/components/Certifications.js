import React from 'react';
import './Certifications.css';
import { motion } from 'framer-motion';
import tsc from '../assets/images/tsc.png' ;
import gold100 from '../assets/images/gold100.png' ;
import iso from '../assets/images/iso.png' ;
import nsc from '../assets/images/nsc.png' ;


const certs = [
    { src: tsc, alt: 'The Soufan Center' },
    { src: gold100, alt: 'Gold 100' },
    { src: iso, alt: 'ISO 9001 Certified' },
    { src: nsc, alt: 'National Safety Council' }
];

export default function Certifications() {
    return (
        <section className="certifications-section">
            <div className="certifications-container">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="certifications-info"
                >
                    <h2 className="certifications-title">
                        CERTIFICATIONS<br />& SAFETY STANDARDS
                    </h2>
                    <p className="certifications-desc">
                        Certified, Compliant & Respected.<br />
                        We follow the strictest standards in safety and training.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="certifications-logos"
                >
                    {certs.map((c, i) =>
                        <img key={i} src={c.src} alt={c.alt} />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
