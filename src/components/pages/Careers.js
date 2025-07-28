import React, {useEffect, useState, useStateEffect} from 'react';
import { Link } from 'react-router-dom';
import { careers } from '../../data/careers'; // Adjust path if needed
import './Careers.css'; // Use a separate CSS file for Careers-specific styles
import career from '../../assets/cover/career.jpg';


export default function Careers() {
    // Banner overlay fade effect
    const [overlayOpacity, setOverlayOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const fadePoint = window.innerHeight;
            const newOpacity = Math.max(0, 1 - scrolled / fadePoint);
            setOverlayOpacity(newOpacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Sort careers by date (latest first)
    const sortedCareers = [...careers].sort(
        (a, b) => new Date(b.posted) - new Date(a.posted)
    );

    return (
        <>
            {/* Full-width banner wrapper */}
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={career} alt="Careers Banner" />
                    <div
                        className="gfs-banner-overlay"
                        style={{ opacity: overlayOpacity }}
                    >
                        <h1>Careers at GAGE</h1>
                        <p>
                            Join our growing team! See open positions in security, fire safety, training, and corporate roles, and learn why GAGE is a great place to build your career.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content section */}
            <section className="careers-container">
                <div className="careers-list">
                    {sortedCareers.length === 0 && (
                        <div className="no-positions">No open positions at the moment. Please check back soon!</div>
                    )}
                    {sortedCareers.map(job => (
                        <Link
                            to={`/careers/${job.id}`}
                            key={job.id}
                            className="career-card"
                        >
                            <div className="career-title">{job.title}</div>
                            <div className="career-meta">
                                {job.location} &bull; {job.type}
                            </div>
                            <div className="career-summary">{job.summary}</div>
                            <div className="career-posted">Posted: {job.posted}</div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
