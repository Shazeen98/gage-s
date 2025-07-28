// src/components/CareerDetails.js

import React, {useEffect, useState, useStateEffect} from "react";
import { useParams, Link } from "react-router-dom";
import { careers } from "../data/careers";
import ApplyForm from "./ApplyForm";
import shade from "../assets/shade.jpg";
import "./CareerDetails.css";  // import external stylesheet

export default function CareerDetails() {
    const { id } = useParams();
    const job = careers.find(j => j.id === id);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const style = document.body.style;
        const prev = {
            backgroundColor: style.backgroundColor,
            backgroundImage: style.backgroundImage,
            backgroundSize: style.backgroundSize,
            backgroundPosition: style.backgroundPosition,
            backgroundRepeat: style.backgroundRepeat,
            backgroundAttachment: style.backgroundAttachment,
        };

        style.backgroundColor = "#000";
        style.backgroundImage = `url(${shade})`;
        style.backgroundSize = "cover";
        style.backgroundPosition = "center";
        style.backgroundRepeat = "no-repeat";
        style.backgroundAttachment = "fixed";

        return () => {
            style.backgroundColor = prev.backgroundColor;
            style.backgroundImage = prev.backgroundImage;
            style.backgroundSize = prev.backgroundSize;
            style.backgroundPosition = prev.backgroundPosition;
            style.backgroundRepeat = prev.backgroundRepeat;
            style.backgroundAttachment = prev.backgroundAttachment;
        };
    }, []);

    if (!job) {
        return (
            <section className="career-details-card career-details-not-found">
                <h2 className="career-details-title">Job Not Found</h2>
                <Link to="/careers" className="career-details-back-link">← Back to all jobs</Link>
            </section>
        );
    }

    return (
        <section className="career-details-card">
            <h2 className="career-details-title">{job.title}</h2>
            <div className="career-details-meta">
                {job.location} &bull; {job.type}
            </div>
            <div className="career-details-summary">{job.summary}</div>
            <div className="career-details-posted">Posted: {job.posted}</div>
            <hr className="career-details-separator" />

            {job.description && (
                <>
                    <h4 className="career-details-heading">Description</h4>
                    {(Array.isArray(job.description)
                        ? job.description.map((d, i) => (
                            <p key={i} className="career-details-text">{d}</p>
                        ))
                        : <p className="career-details-text">{job.description}</p>)}
                </>
            )}

            {job.requirements && (
                <>
                    <h4 className="career-details-heading">Requirements</h4>
                    <ul className="career-details-list">
                        {job.requirements.map((r, i) => (
                            <li key={i}>{r}</li>
                        ))}
                    </ul>
                </>
            )}

            {job.benefits?.length > 0 && (
                <>
                    <h4 className="career-details-heading">Benefits</h4>
                    <ul className="career-details-list">
                        {job.benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </>
            )}

            <div className="career-details-actions">
                <button
                    onClick={() => setShowForm(true)}
                    className="career-details-apply-btn"
                >
                    Apply Now
                </button>
                <Link to="/careers" className="career-details-back-link">
                    ← Back to all jobs
                </Link>
            </div>

            {showForm && (
                <div
                    className="career-details-modal-backdrop"
                    onClick={() => setShowForm(false)}
                >
                    <div
                        className="career-details-modal-content"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowForm(false)}
                            className="career-details-modal-close"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <ApplyForm
                            job_title={job.title}
                            onClose={() => setShowForm(false)}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
