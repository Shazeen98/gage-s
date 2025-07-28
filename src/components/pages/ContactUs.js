// File: src/components/ContactUs.js
import React, {useEffect, useState, useStateEffect} from 'react';
import axios from 'axios';
import './ContactUs.css';
import contactus from '../../assets/cover/contactus.jpg';


export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);
    const [submitting, setSubmitting] = useState(false);
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

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required.';
                if (value.trim().length < 2) return 'Name must be at least 2 characters.';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required.';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Invalid email address.';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required.';
                if (value.trim().length < 10) return 'Message must be at least 10 characters.';
                return '';
            default:
                return '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        Object.entries(form).forEach(([key, value]) => {
            const error = validateField(key, value);
            if (error) newErrors[key] = error;
        });
        return newErrors;
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus(null);
        const validationErrors = validateForm();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setSubmitting(true);
        try {
            await axios.post('/api/contact', form);
            setStatus('✅ Message sent! We’ll be in touch.');
            setForm({ name: '', email: '', message: '' });
            setErrors({});
        } catch (err) {
            setStatus('❌ Oops—something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {/* Full-width banner wrapper */}
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={contactus} alt="Contact Us Banner" />
                    <div
                        className="gfs-banner-overlay"
                        style={{ opacity: overlayOpacity }}
                    >
                        <h1>Contact Us</h1>
                        <p>We’re here to help. Please reach out to us using the form below.</p>
                    </div>
                </div>
            </div>

            <section className="contactus-section">
                <form onSubmit={handleSubmit} className="contactus-form" noValidate>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            autoComplete="name"
                        />
                        {errors.name && <div className="contactus-error">{errors.name}</div>}
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="email"
                        />
                        {errors.email && <div className="contactus-error">{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <div className="contactus-error">{errors.message}</div>}
                    </div>

                    <button
                        type="submit"
                        className="contactus-btn"
                        disabled={submitting}
                    >
                        {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {status && (
                    <div className={`contactus-status ${status.startsWith('✅') ? 'success' : 'fail'}`}>{status}</div>
                )}
            </section>
        </>
    );
}
