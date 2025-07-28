import React, {useEffect, useState, useStateEffect} from 'react';
import './GageSecurity.css';
import gagesecurity from '../../assets/cover/gagesecurity.jpg';

import resort from '../../assets/security/resort.png' ;
import eventsecurity from '../../assets/security/eventsecurity.png' ;
import cctv from '../../assets/security/cctv.png' ;
import consult from '../../assets/security/consult.png' ;
import bus from '../../assets/security/bus.png' ;
import bouncer from '../../assets/security/bouncer.png' ;
import securityonsultant from '../../assets/security/securityonsultant.png' ;
import workshop from '../../assets/security/workshop.png' ;

const solutions = [
    {
        img: resort,
        alt: 'Resort & industrial security services',
        label: 'Resort & industrial security services',
    },
    {
        img: eventsecurity,
        alt: 'Event Security Service',
        label: 'Event Security Service',
    },
    {
        img: cctv,
        alt: 'CCTV & Security systems',
        label: 'CCTV & Security systems',
    },
    {
        img: consult,
        alt: 'Outsourced CCTV / Monitoring Service',
        label: 'Outsourced CCTV / Monitoring Service',
    },
    {
        img: bus,
        alt: 'Cash in Transit Service',
        label: 'Cash in Transit Service',
    },
    {
        img: bouncer,
        alt: 'Close Protection Service',
        label: 'Close Protection Service',
    },
    {
        img: securityonsultant,
        alt: 'Security Consultancy',
        label: 'Security Consultancy',
    },
    {
        img: workshop,
        alt: 'Security Assessments & Audits',
        label: 'Security Assessments & Audits',
    },
];

export default function GageSecurity() {
    const [overlayOpacity, setOverlayOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled   = window.scrollY;
            const fadePoint  = window.innerHeight;
            setOverlayOpacity(Math.max(0, 1 - scrolled / fadePoint));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={gagesecurity} alt="Gage Security Banner" />
                    <div
                        className="gfs-banner-overlay"
                        style={{ opacity: overlayOpacity }}
                    >
                        <h1>Gage Security</h1>
                        <p>
                            Incorporated by the Former Commissioner of Police, Mr. Abdulla Riyaz, on July 21, 2010, GAGE offers vast experience and knowledge in the security business, providing a "Client Protective Service." GAGE has achieved significant success by expanding on its strategy of honesty, integrity, and collaboration with clients through expert protection and consultation for public and private enterprises.
                        </p>
                    </div>
                </div>
            </div>

            <section className="security-section">
                <h2 className="sec-title">Gage Security</h2>

                <p>
                    To effectively protect people, property, and investments, a competent, dependable client protective
                    service is required. We increase worker motivation and customer satisfaction by investing in the
                    personal and professional growth of the GAGE Security Team. At GAGE, we recognize the value of our
                    team in offering above-and-beyond customer service.
                </p>
                <p>
                    GAGE believes that investing in personnel is the key to providing excellent service. That’s why we
                    focus heavily on recruitment, training, and development of our managers, supervisors, and front-line
                    security officers.
                </p>
                <p>
                    Our focus on quality, combined with a unique, customer-centered approach to commercial security
                    services, sets GAGE apart in the industry. We offer peace of mind, allowing clients to focus on
                    achieving their business goals rather than security concerns.
                </p>
                <p>
                    In the Republic of Maldives, our service is quickly becoming the leading solution for Client
                    Protective Services.
                </p>

                <section className="why-choose-us">
                    <div className="why-choose-us__container">
                        <h2>WHY CHOOSE US?</h2>
                        <ul>
                            <li>The security staff of GAGE will have optimal training and skills at all times.</li>
                            <li>We believe that security service is best served by professionals and that we are uniquely positioned to successfully deliver a professional high quality service.</li>
                            <li>Security solutions are far more effective when they are managed by skilled security professionals.</li>
                            <li>We don't enforce "our way only" – we modify and adapt according to our clients' corporate standards and requirements.</li>
                            <li>Our security services are functional 24 hours a day, 7 days a week and 365 days a year.</li>
                            <li>Quality and commitment is our motive.</li>
                        </ul>
                    </div>

                    <div className="solutions">
                        <h2>Complete Fire Safety Solution</h2>
                        <div className="solutions-grid">
                            {solutions.map(({ img, alt, label }, idx) => (
                                <div className="solution-card" key={idx}>
                                    <img src={img} alt={alt} />
                                    <p>{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}
