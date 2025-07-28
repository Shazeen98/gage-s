import React, {useEffect, useState, useStateEffect} from 'react';
import './GageFireSafety.css';
import gagefiresafety from '../../assets/cover/gagefiresafety.jpg';

import fireex from '../../assets/firesafety/fireex.png' ;
import firealarm from '../../assets/firesafety/firealarm.png' ;
import FireHydrantSystems from '../../assets/firesafety/FireHydrantSystems.png' ;
import DryRiserSystems from '../../assets/firesafety/DryRiserSystems.png' ;
import FireHoseReel from '../../assets/firesafety/FireHoseReel.png' ;
import FirePumps from '../../assets/firesafety/FirePumps&Controllers.png' ;
import AutomaticFire from '../../assets/firesafety/AutomaticFire.png' ;
import Co2FloodingSystem from '../../assets/firesafety/Co2FloodingSystem.png' ;
import KitchenHood from '../../assets/firesafety/KitchenHood.png' ;
import FireFightingGears from '../../assets/firesafety/FireFightingGears.png' ;
import Foam from '../../assets/firesafety/Foam&Foam.png' ;
import fireexit from '../../assets/firesafety/fireexit.png' ;
import aerosolsystem from '../../assets/firesafety/aerosolsystem.png' ;
import firefightertraining from '../../assets/firesafety/firefightertraining.png' ;



// 1️⃣ Import the background shade image
import shade from '../../assets/shade.jpg';

// Equipment data
const equipment = [
    {
        title: 'Fire Extinguishers',
        text: `Protection from fire starts with making sure your fire extinguishers are ready to go. Extinguishers
are the first line of defense and a valuable means of egress during an emergency.
We provide quality fire extinguishers with proper testing and inspection.`,
        img: fireex,
        alt: 'Fire Extinguishers',
    },
    {
        title: 'Fire Alarm System',
        text: `We sell reliable fire alarm systems. This includes fire control panels, smoke detectors (with or without
sounder) and all kinds of heat detectors, multi sensors, carbon monoxide detectors.`,
        img: firealarm,
        alt: 'Fire Alarm System',
    },
    {
        title: 'Fire Hydrant Systems',
        text: `At GAGE we are expert strategists. We offer a range of fire hydrant systems and all required
accessories. We cater your hydrant requirements as per your specifications.`,
        img: FireHydrantSystems,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Dry Riser Systems',
        text: `The selection of materials for the manufacture of the valve are all corrosion 
        resistance, tough and durable. The internal casting finishes are of the highest quality and durability.`,
        img: DryRiserSystems,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Fire Hose Reel',
        text: `Various types of Fire Hose Reels are available to meet specific needs. With a standard 
        fully extended length of to 25 - 30 meters. High resistance to oil, gasoline and wide range of 
        chemicals. Highly resistant to both contact and radiant heat.`,
        img: FireHoseReel,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Fire Pumps & Controllers',
        text: `We offer a broad range fire pumps for almost all type of buildings. You can consult us to
         design your firefighting system, incorporated with theses fluid processing pumps. Additionally, 
         we also provide the necessary equipment needed for testing and maintenance of these industrial
         pumps`,
        img: FirePumps,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Automatic Fire Supression Systems',
        text: `Environment friendly systems; efficient designs prevent unnecessarily system discharges. 
        Sustainable fire suppression technology, ensuring users are well
informed about what they are installing.
`,
        img: AutomaticFire,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Co2 Flooding System',
        text: `We provide flooding systems which quickly extinguishes both surface and deep seated fire 
        hazards by discharging the agent into an enclosed volume.
`,
        img: Co2FloodingSystem,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Kitchen Hood Wet Chemical System',
        text: `We provide the training about FM 200. Setting delay time to prevent unnecessary discharge..
`,
        img: KitchenHood,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Fire Fighting Gears',
        text: `In addition to our commercial range of fire equipment, we have equipment that we source 
        specifically for residential properties. If you are not sure what you need then contact us and 
        we can help you to decide what's best for your situation.
`,
        img: FireFightingGears,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Foam & Foam Equipments',
        text: `We offer a range of foam tanks, foam chambers and pourers, deluge valves, foam monitors,
         and foam masters, which we will assist in testing and maintaining and installation of these 
         services.
`,
        img: Foam,
        alt: 'Fire Hydrant Systems',
    },
    {
        title: 'Fire Risk Assessment',
        text: `We provide reliable fire risk assessments and fire detection systems — including control panels,
         smoke detectors (with or without sounders), heat detectors, multi-sensors, and carbon monoxide detectors.
`,
        img: fireexit,
        alt: 'Fire Risk Assessment',
    },
    {
        title: 'Aerosol System',
        text: `We offer reliable aerosol fire suppression systems — compact, pipe-free, and ideal for 
        enclosed areas like electrical rooms and server cabinets.
`,
        img: aerosolsystem,
        alt: 'Aerosol System',
    },
    {
        title: 'Fire Systems Maintenance',
        text: `We provide professional maintenance for fire alarm and suppression systems, 
        ensuring they operate reliably and meet all safety standards.
`,
        img: firefightertraining,
        alt: 'Fire Systems Maintenance',
    },
    {
        title: 'Fire Fighter Trainings',
        text: `We offer expert firefighter training programs, covering fire safety, emergency response,
         rescue techniques, and equipment handling — designed for both beginners and professionals.
`,
        img: firefightertraining,
        alt: 'Fire Fighter Trainings',
    },
];

export default function GageFireSafety() {
    const [overlayOpacity, setOverlayOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const fadePoint = window.innerHeight;
            setOverlayOpacity(Math.max(0, 1 - scrolled / fadePoint));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        // 2️⃣ Wrap everything in a div that applies your shade + black background
        <div
            style={{
                backgroundColor:      '#000',
                backgroundImage:      `url(${shade}), linear-gradient(#000,#000)`,
                backgroundSize:       'cover, cover',
                backgroundPosition:   'center center, center center',
                backgroundRepeat:     'no-repeat, no-repeat',
                backgroundAttachment: 'fixed, scroll',
            }}
        >
            {/* Banner */}
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={gagefiresafety} alt="Fire Safety Banner" />
                    <div className="gfs-banner-overlay" style={{ opacity: overlayOpacity }}>
                        <h1>Fire Safety Services</h1>
                        <p>
                            Our core services include the supply, installation, testing, and commissioning
                            of fire safety systems such as extinguishers, hose reels, hydrants, suppression
                            systems (FM200, CO₂, kitchen hood), along with maintenance contracts, training,
                            emergency planning, and fire safety consultancy.
                        </p>
                    </div>
                </div>
            </div>

            {/* Items List */}
            <section className="gfs-section">
                <div className="gfs-inner">
                    <h2 className="gfs-fs-title">Fire Safety Equipment &amp; Systems</h2>
                    <p>We provide fire safety equipment's and systems that includes fire
                        extinguishers, fire hose reels, dry riser systems, fire hydrants,
                        kitchen hood fire suppression systems, FM 200 and CO2 fire
                        suppression systems. Services include installation, testing and
                        commissioning of these systems and after sales support with the
                        help of service and maintenance contracts and training and
                        maintenance contracts to help systems up and running
                        whenever required. We do provide fire emergency plans, evaluate
                        and give consultancy for continuous improvement.</p>
                    <div className="gfs-items">
                        {equipment.map((item, idx) => (
                            <div className="gfs-item" key={idx}>
                                <div className="gfs-item-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                                <div className="gfs-item-image">
                                    <img src={item.img} alt={item.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
