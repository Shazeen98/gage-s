import React, { useState } from "react";
import "./ApplyForm.css";

export default function ApplyForm({ job_title = "", onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        cv: null,
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    function validate() {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email address.";
        if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
        else if (form.phone.replace(/\D/g, "").length < 7) newErrors.phone = "Phone number is too short.";
        if (!form.cv) newErrors.cv = "Please attach your CV.";
        return newErrors;
    }

    function handleChange(e) {
        const { name, value, files } = e.target;
        setForm(f =>
            files ? { ...f, [name]: files[0] } : { ...f, [name]: value }
        );
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSubmitted(false);

        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setSubmitting(true);
        try {
            const data = new FormData();
            data.append("name", form.name);
            data.append("email", form.email);
            data.append("phone", form.phone);
            data.append("message", form.message);
            data.append("job_title", job_title);
            if (form.cv) data.append("cv", form.cv);

            const res = await fetch("/api/apply", {
                method: "POST",
                body: data,
            });
            const result = await res.json();
            if (result.ok || result.success) {
                setSubmitted(true);
                setForm({ name: "", email: "", phone: "", message: "", cv: null });
                setErrors({});
            } else {
                setError(result.message || "Failed to send. Please try again.");
            }
        } catch {
            setError("Failed to send. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div className="apply-form__submitted">
                Thank you for your application!<br/>
                We will contact you if you are shortlisted.
                <button
                    onClick={onClose}
                    className="apply-form__close-btn"
                >
                    Close
                </button>
            </div>
        );
    }

    return (
        <form
            className="apply-form"
            onSubmit={handleSubmit}
            autoComplete="off"
            encType="multipart/form-data"
        >
            <div className="apply-form__header">
                Apply for: <span className="apply-form__job-title">{job_title}</span>
            </div>

            <input
                name="name"
                type="text"
                className="apply-form__input"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
            />
            {errors.name && <span className="apply-form__error">{errors.name}</span>}

            <input
                name="email"
                type="email"
                className="apply-form__input"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />
            {errors.email && <span className="apply-form__error">{errors.email}</span>}

            <input
                name="phone"
                type="tel"
                className="apply-form__input"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            {errors.phone && <span className="apply-form__error">{errors.phone}</span>}

            <textarea
                name="message"
                className="apply-form__textarea"
                value={form.message}
                onChange={handleChange}
                placeholder="Why are you the best fit? (optional)"
            />

            <label className="apply-form__file-label">
                Attach CV
                <input
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="apply-form__file-input"
                    onChange={handleChange}
                />
            </label>
            {errors.cv && <span className="apply-form__error">{errors.cv}</span>}

            {error && <div className="apply-form__submit-error">{error}</div>}

            <button
                type="submit"
                className="apply-form__submit-btn"
                disabled={submitting}
            >
                {submitting ? "Sending..." : "Submit Application"}
            </button>
        </form>
    );
}
