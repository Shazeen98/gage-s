import React from 'react';

const reviews = [
    { name:'Ahmed S.', role:'Resort Manager, JW Marriott', text:'“We sleep easier with GAGE’s security team watching over us.”', avatar:'ahmed.jpg' },
    { name:'Mariya T.', role:'HR Director, Mercure Hotels', text:'“Their training helped us handle a real medical emergency like professionals.”', avatar:'mariya.jpg' },
];

export default function Testimonials() {
    return (
        <section className="testimonials container">
            <h3>What Our Clients Say</h3>
            <div className="cards">
                {reviews.map((r,i) =>
                    <div className="card" key={i}>
                        <img src={`/images/${r.avatar}`} alt={r.name} style={{ width:60, borderRadius:'50%' }} />
                        <p>{r.text}</p>
                        <p><strong>{r.name}</strong>, <em>{r.role}</em></p>
                    </div>
                )}
            </div>
        </section>
    );
}
