import React, {useEffect, useState, useStateEffect} from 'react';
import './GageTraining.css';
import gageinstitute from '../../assets/cover/gageinstitute.jpg';
import emergencydrill from '../../assets/training/emergencydrill.jpg' ;
import firedrillfire from '../../assets/training/firedrillfire.jpg' ;
import firefightertraining from '../../assets/training/firefightertraining.png' ;
import firesafetytraining from '../../assets/training/firesafetytraining.jpg' ;
import firstaidtraining from '../../assets/training/firstaidtraining.jpg' ;
import ifbctraining from '../../assets/training/ifbctraining.jpg' ;
import industrialfirebrigadecourse from '../../assets/training/industrialfirebrigadecourse.jpg' ;
import securitystudies from '../../assets/training/securitystudies.jpg' ;
import swimmingandwaterrescuetraining from '../../assets/training/swimmingandwaterrescuetraining.jpg' ;
import training1 from '../../assets/training/training1.jpg' ;
import training2 from '../../assets/training/training2.jpg' ;
import training3 from '../../assets/training/training3.jpg' ;
import training4 from '../../assets/training/training4.jpg' ;
import training5 from '../../assets/training/training5.jpg' ;




// Array of training images for the slider
const trainingImages = [
    training1,
    training2,
    training3,
    training4,
    training5,
];

export default function GageTraining() {
    const [overlayOpacity, setOverlayOpacity] = useState(1);

    // Data arrays for the cards
    const courses = [
        {
            title: 'Security Officer Training',
            desc: 'Introduction to security protocols, surveillance techniques, and basic incident response procedures.'

        },
        {
            title: 'Security Supervisor Training',
            desc: 'Advanced training in team leadership, incident management, reporting procedures, and operational oversight.'
        },

        {
            title: 'Swimming and Water Rescue',
            desc: 'Training in essential swimming skills, water safety, and rescue techniques for responding to aquatic emergencies.'
        },
        {
            title: 'Life Guard Training',
            desc: 'Comprehensive training in water surveillance, rescue operations, CPR, and first aid for ensuring safety at pools and beaches.'
        },
        {
            title: 'Maritime Safety Awareness',
            desc: 'Introduction to maritime safety regulations, emergency procedures, and risk prevention for personnel working at sea.'
        },
        {
            title: 'Basic First Aid',
            desc: 'Essential training in first aid techniques, including wound care, CPR, choking response, and handling common medical emergencies.'
        },
        {
            title: 'Basic Life Support and First Aid',
            desc: 'Training in CPR, AED use, and essential first aid skills to respond effectively to cardiac and medical emergencies.'
        },
        {
            title: 'Standard First Aid & CPR Course - Singapore',
            desc: 'Comprehensive training covering first aid techniques, CPR procedures, and emergency response, aligned with Singapore’s national guidelines.'
        },
        {
            title: 'Basic Fire Safety',
            desc: 'Fundamental training on fire prevention, safe evacuation procedures, and the correct use of fire extinguishers in emergency situations.'
        },
        {
            title: 'Self Defence and Flexibility',
            desc: 'Training focused on basic self-defence techniques, situational awareness, and improving physical flexibility for better mobility and response.'
        },
        {
            title: 'Risk Assessment Training',
            desc: 'Comprehensive training on identifying hazards, evaluating risks, and implementing control measures to ensure workplace safety and compliance.'
        },
        {
            title: 'Introduction to Risk Management',
            desc: 'Foundational training on risk identification, analysis, and mitigation strategies to support informed decision-making and organizational resilience.'
        }

    ];


    const lifeAtGage = [
        { img: emergencydrill,               caption: 'Emergency Drill Sessions' },
        { img: firedrillfire,                         caption: 'Fire Drill Sessions' },
        { img: firefightertraining,                   caption: 'Fire Fighter Training' },
        { img: firesafetytraining,                    caption: 'Fire Safety Training' },
        { img: firstaidtraining,                      caption: 'First Aid Training' },
        { img: ifbctraining,                          caption: 'IFBC Training' },
        { img: industrialfirebrigadecourse,           caption: 'Industrial Fire Brigade Course' },
        { img: securitystudies,                       caption: 'Security Studies' },
        { img: swimmingandwaterrescuetraining,        caption: 'Swimming and Water Rescue Training' },

    ];


    useEffect(() => {
        const handleScroll = () => {
            const scrolled  = window.scrollY;
            const fadePoint = window.innerHeight;
            setOverlayOpacity(Math.max(0, 1 - scrolled / fadePoint));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Banner */}
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={gageinstitute} alt="Training Banner" />
                    <div className="gfs-banner-overlay" style={{ opacity: overlayOpacity }}>
                        <h1>Our Trainings</h1>
                        <p>
                            GAGE training institute is a registered institute with Department of Higher Education. We
                            conduct several training courses, seminars and workshops for our clients. Our security
                            and law enforcement department conduct courses related to security and law
                            enforcement. Safety and security courses are designed to cater for our clients. We do
                            provide long term training packages to resorts and other institutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content + Cards */}
            <section className="gfs-training-section">
                <h1 className="gfs-title">Gage Institute</h1>
                <p className="gfs-training-intro">
                    GAGE training institute is a registered institute with Department of Higher Education. We
                    conduct several training courses, seminars and workshops for our clients. Our security
                    and law enforcement department conduct courses related to security and law
                    enforcement. Safety and security courses are designed to cater for our clients. We do
                    provide long term training packages to resorts and other institutions.
                </p>

                {/*<ul className="gfs-training-list">*/}
                {/*    <li>Fire Squad Training Level 1 &amp; Level 2</li>*/}
                {/*    <li>Fire Squad - Refresher Training</li>*/}
                {/*    <li>Basic Fire Awareness Training</li>*/}
                {/*    <li>Basic First Aid Training</li>*/}
                {/*</ul>*/}

                {/*<p className="gfs-training-description">*/}
                {/*    Through our fire awareness training programme, participants will be trained how to successfully extinguish*/}
                {/*    a fire with the aid of fire blankets and portable fire extinguishers.*/}
                {/*</p>*/}



                {/* === Cards Grid === */}
                <div className="cards-grid">
                    {/* Our Courses */}
                    <div className="card">
                        <h2>Our Courses</h2>
                        {courses.map((c, i) => (
                            <div className="card-item" key={i}>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Life at Gage Institute */}
                    <div className="card_gt">
                        <h2>Life at Gage Institute</h2>
                        <div className="life-gallery">
                            {lifeAtGage.map((l, i) => (
                                <figure key={i}>
                                    <img src={l.img} alt={l.caption}/>
                                    <figcaption>{l.caption}</figcaption>

                                </figure>

                            ))}

                        </div>
                        <p>
                            Life at Gage Institute is a dynamic blend of professional development,
                            hands-on learning, and a strong sense of community. Our environment fosters curiosity,
                            collaboration, and innovation, allowing trainees and professionals alike to thrive in
                            both technical skills and leadership abilities. From state-of-the-art training facilities
                            to real-world simulations, every experience at Gage is designed to build confidence and
                            competence. Beyond the classroom, we promote a supportive culture through team-building
                            activities, interactive workshops, and mentorship opportunities that prepare individuals
                            for real-world challenges. Whether you're enrolled in a fire safety course, security
                            training, or life-saving certification, you’ll find yourself surrounded by passionate
                            instructors and motivated peers, all working together towards a safer, stronger future.
                            At Gage, learning is not just about gaining knowledge — it's about building a meaningful
                            career with purpose.
                        </p>

                        <p>
                            Life at Gage Institute is a dynamic blend of professional development, hands-on learning,
                            and a strong sense of community. Our environment fosters curiosity, collaboration,
                            and innovation, allowing trainees and professionals alike to thrive in both technical skills
                            and leadership abilities. From state-of-the-art training facilities to real-world simulations,
                            every experience at Gage is designed to build confidence and competence. Beyond the classroom,
                            we promote a supportive culture through team-building activities, interactive workshops,
                            and mentorship opportunities that prepare individuals for real-world challenges.
                            Whether you're enrolled in a fire safety course, security training, or life-saving
                            certification, you’ll find yourself surrounded by passionate instructors and motivated peers,
                            all working together towards a safer, stronger future. At Gage, learning is not just about
                            gaining knowledge — it's about building a meaningful career with purpose.
                        </p>
                    </div>


                </div>
                {/* Image Slider */}
                <div className="slider-container">
                    <div className="slider-track">
                        {trainingImages.concat(trainingImages).map((src, idx) => (
                            <div className="slider-item" key={idx}>
                                <img src={src} alt={`Training ${((idx % trainingImages.length) + 1)}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
