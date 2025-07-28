import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0 }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}
