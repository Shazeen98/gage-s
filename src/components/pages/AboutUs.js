import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import aboutus from '../../assets/cover/aboutus.jpg';
import mission from '../../assets/images/mission.png' ;
import corevalues from '../../assets/images/corevalues.png' ;
import binocular from '../../assets/images/binocular.png' ;
import Black1 from '../../assets/aboutusicon/Black1.png' ;
import Black2 from '../../assets/aboutusicon/Black2.png' ;
import Black3 from '../../assets/aboutusicon/Black3.png' ;
import Black4 from '../../assets/aboutusicon/Black4.png' ;
import Black5 from '../../assets/aboutusicon/Black5.png' ;
import Black6 from '../../assets/aboutusicon/Black6.png' ;
import Black7 from '../../assets/aboutusicon/Black7.png' ;
import Black8 from '../../assets/aboutusicon/Black8.png' ;


export default function AboutUs() {
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

    return (
        <>
            {/* Full-width banner wrapper */}
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={aboutus} alt="About Us Banner"/>


                    <div
                        className="gfs-banner-overlay"
                        style={{ opacity: overlayOpacity }}
                    >
                        <h1>About Us</h1>
                        <p>
                            GAGE was established by, Mr. Abdulla
                            Riyaz, the former Commissioner of
                            Police, on July 21, 2010. GAGE has
                            extensive expertise and understanding in
                            the safety and security industry, and
                            provide a "Client Protective Services."
                        </p>
                    </div>
                </div>
            </div>

            {/* Main content section */}
            <section className="about-us-content">
                {/* Vision, Mission & Values with wrapper for left/right gap */}
                <div className="features-wrapper">
                    <div className="features">
                        <div className="feature-card">
                            <img src={mission} alt="Mission Icon" />
                            <h2>Mission</h2>
                            <p>To provide quality security
                                services, to attract and
                                retain professional talent
                                and to be the leader in the
                                client protective services
                                industry.</p>
                        </div>
                        <div className="feature-card">
                            <img src={binocular} alt="Vision Icon" />
                            <h2>Vision</h2>
                            <p>To be the most professional
                                leader of client protective
                                service industry that
                                protects people, property
                                and assets.</p>
                        </div>
                        <div className="feature-card">
                            <img src={corevalues} alt="Values Icon" />
                            <h2>Values</h2>
                            <p>The ethics of our business
                                are quality of advice, quality
                                of service and quality of our
                                people.</p>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="services" style={{ marginTop: '4rem' }}>
                    <h2 style={{ maxWidth: '640px', margin: '0 auto 1rem', textAlign: 'center' }}>About Us</h2>
                    <p>GAGE was established by, Mr. Abdulla
                        Riyaz, the former Commissioner of
                        Police, on July 21, 2010. GAGE has
                        extensive expertise and understanding in
                        the safety and security industry, and
                        provide a "Client Protective Service."</p>
                    <p>GAGE was built on the foundation of
                        providing client protection services to
                        corporate establishments in the
                        Maldives. As a safety and security total
                        solution provider, their portfolio includes
                        security, safety, fire protection, CCTV
                        System, Access Control System and
                        related training services in the Maldives.
                    </p>
                    <p>
                        Since October 2020, GAGE and The
                        Soufan Group (USA) have been
                        collaborating. TSG is a worldwide
                        intelligence and security firm that assists
                        clients in the public and private sectors in
                        improving their capacity to identify,
                        analyze, and successfully operate in
                        high-risk, high-opportunity contexts.
                    </p>
                    <p>
                        GAGE aims to address all the security
                        concerns of private establishments. The company strongly believes that, as a
                        professional security service provider in
                        the Maldives, they can strengthen the
                        safety of the public along with law
                        enforcement agencies, addressing the
                        country’s security concerns.

                    </p>

                    <p>The ISO 9001 Quality Management
                        standard has been achieved by GAGE in
                        2022, making it the first client protection
                        service provider in the Maldives to
                        achieve this certification.</p>
                    <p>
                        GAGE was awarded with “GOLD100”-
                        among the leading 100 companies of the
                        Maldives in the year 2021 & 2022.
                    </p>
                    <p>
                        GAGE, the leading provider of client
                        protection services in the Maldives,
                        primarily collaborates with the tourism
                        sector, serving around one-third of its
                        clients with a proactive and vigilant team.
                        Their clientele comprises of international
                        resorts, international banks established
                        in the Maldives, as well as foreign
                        diplomatic establishments in the
                        Maldives.
                    </p>
                </div>

                {/* Complete Fire Safety Solution */}
                <div className="solutions" style={{ marginTop: '4rem', fontSize: '0.7rem' }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Complete Fire Safety Solution</h2>
                    <div className="features-wrapper">
                        <div className="solutions-grid">
                            <div className="solution-card" >
                                <img src={Black1} alt="Fire Safety Consultancy" />
                                <p>Fire Safety Consultancy</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black2}alt="Fire System Designing" />
                                <p>Fire System Designing</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black3} alt="Fire System Approvals" />
                                <p>Fire System Approvals</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black4} alt="Fire Extinguishers & Other Equipments" />
                                <p>Fire Extinguishers & Other Equipments</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black5} alt="Fire System Supplying" />
                                <p>Fire System Supplying</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black6} alt="Fire System Installation & Testing" />
                                <p>Fire System Installation & Testing</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black7} alt="After Sales Service" />
                                <p>After Sales Service</p>
                            </div>
                            <div className="solution-card">
                                <img src={Black8} alt="Fire Training" />
                                <p>Fire Training</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
