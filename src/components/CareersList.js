import React from "react";
import { Link } from "react-router-dom";
import { careers } from "../data/careers";

export default function CareersList() {
    // Sort by posted date descending (latest first)
    const sortedCareers = [...careers].sort(
        (a, b) => new Date(b.posted) - new Date(a.posted)
    );

    return (
        <section style={{ maxWidth: 900, margin: "2.5rem auto", padding: "1rem" }}>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Join Our Team</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {sortedCareers.map(job => (
                    <Link
                        to={`/careers/${job.id}`}
                        key={job.id}
                        style={{
                            background: "#fff",
                            borderRadius: 14,
                            boxShadow: "0 2px 12px rgba(30,40,60,0.07)",
                            padding: "1.3rem 2rem",
                            color: "#222",
                            textDecoration: "none",
                            transition: "box-shadow 0.14s, transform 0.14s"
                        }}
                    >
                        <div style={{ fontSize: "1.17rem", fontWeight: 700, marginBottom: 6 }}>{job.title}</div>
                        <div style={{ fontSize: "0.97rem", color: "#555", marginBottom: 4 }}>
                            {job.location} &bull; {job.type}
                        </div>
                        <div style={{ fontSize: "0.98rem", color: "#222", marginBottom: 10 }}>
                            {job.summary}
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#888" }}>
                            Posted: {job.posted}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
