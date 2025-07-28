// src/components/PrivacyPolicy.js

import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
    useEffect(() => {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        document.body.style.margin = '0';
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            document.body.style.margin = '';
        };
    }, []);

    return (
        <div className="privacy-policy-page">
            <h1>Privacy Policy</h1>
            <p>
                At Gage Pvt Ltd, we are committed to protecting your privacy. This Privacy Policy explains how we collect, and safeguard your personal information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <ul className="privacy-policy-list">
                <li>Personal information you provide to us</li>
                <li>Information collected automatically (cookies, usage data)</li>
                <li>Information from third parties</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul className="privacy-policy-list">
                <li>To provide and improve our services</li>
                <li>To communicate with you</li>
                <li>To comply with legal obligations</li>
            </ul>

            <h2>Your Rights</h2>
            <ul className="privacy-policy-list">
                <li>Access, correct, or delete your data</li>
                <li>Opt-out of certain communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
                If you have any questions about our Privacy Policy, please contact us at{' '}
                <a href="mailto:info@gage.com.mv">info@gage.com.mv</a>.
            </p>
        </div>
    );
}
