import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Stats.css';

const stats = [
    { value: 10,  suffix: '+', label: ['Years of', 'Experience'] },
    { value: 100, suffix: '+', label: ['Satisfied', 'Clients'] },
    { value: 150, suffix: '+', label: ['Successful', 'Projects'] },
];

export default function Stats() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className="stats-full-width-bg">
            <div className="stats-border" />
            <div className="stats-row" ref={ref}>
                {stats.map(({ value, suffix, label }, i) => (
                    <div className="stat-item" key={i}>
                        <div className="stat-number">
                            {inView ? (
                                <>
                                    {/* CountUp only for the number… */}
                                    <CountUp end={value} duration={3.5} />
                                    {/* …and our raised “+” */}
                                    <sup className="stat-suffix">{suffix}</sup>
                                </>
                            ) : (
                                <>
                                    0<sup className="stat-suffix">{suffix}</sup>
                                </>
                            )}
                        </div>
                        <div className="stat-label">
                            <span>{label[0]}</span>
                            <span>{label[1]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
