import React, { useState } from 'react';

const services = [
    { key:'security', label:'GAGE SECURITY',    desc:'Armed/Unarmed Guards · 24/7 Patrol & Monitoring · Surveillance & Intrusion Alerts' },
    { key:'fire',     label:'GAGE FIRE SAFETY', desc:'Fire Alarms · Sprinkler Systems · Emergency Planning & Drills' },
    { key:'training', label:'GAGE TRAINING',    desc:'First Aid · CPR · Fire Safety · Custom Emergency Response Training' },
];

export default function ServicesTabs() {
    const [tab, setTab] = useState('security');
    const current = services.find(s => s.key === tab);

    return (
        <section className="services-tabs container">
            <div className="service-btns">
                {services.map(s =>
                    <button
                        key={s.key}
                        className="btn"
                        style={{ opacity: s.key===tab ? 1 : 0.6 }}
                        onClick={() => setTab(s.key)}
                    >{s.label}</button>
                )}
            </div>
            <p style={{ marginTop:'1rem' }}>{current.desc}</p>
        </section>
    );
}
