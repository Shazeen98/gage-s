import React from 'react';
import './App.css';
import './components/responsive.css';

import {BrowserRouter, Routes, RouteLocation, useLocation, Route} from 'react-router-dom';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

// Sections
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Stats from './components/Stats';
import ServicesOverview from './components/ServicesOverview';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import Certifications from './components/Certifications';
import AboutSection from "./components/AboutSection";

// Pages
import AboutUs from './components/pages/AboutUs';
import GageSecurity from './components/pages/GageSecurity';
import GageFireSafety from './components/pages/GageFireSafety';
import GageTraining from './components/pages/GageTraining';
import Careers from './components/pages/Careers';
import NewsBlog from './components/pages/NewsBlog';
import ContactUs from './components/pages/ContactUs';
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import CallToAction from './components/CallToAction';
import CareersList from './components/CareersList';
import CareerDetails from './components/CareerDetails';
// Blog
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';

// Helper for layout and header margin
function AppRoutesWithLayout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <>
            {/* Header always present */}
            <Header />
            {/* Add a top margin only for non-home pages */}
            <main
                className="container"
                style={{
                    marginTop: isHome ? 0 : 70,  // 70px or adjust to your header height
                    minHeight: 'calc(100vh - 250px)', // ensure footer doesn't overlap
                    transition: 'margin-top 0.2s'
                }}
            >
                <Routes>
                    <Route path="/" element={
                        <>
                            {/* Black background section */}
                            <div className="black-bg-section">
                                <Hero />
                                <TrustedBy />
                                <AboutSection/>
                                <Stats />
                                <ServicesOverview />
                                <HowItWorks />

                            </div>
                            {/* White background resumes here */}
                            <CallToAction />
                            <BlogPreview />
                            <Certifications />
                        </>
                    } />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/gage-security" element={<GageSecurity />} />
                    <Route path="/gage-fire-safety" element={<GageFireSafety />} />
                    <Route path="/gage-training" element={<GageTraining />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/news-and-blog" element={<NewsBlog />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/careers" element={<CareersList />} />
                    <Route path="/careers/:id" element={<CareerDetails />} />

                    {/* Blog routes */}
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />
                </Routes>
            </main>
            <ScrollToTopButton />
            <Footer />
        </>
    );
}

// Wrap the layout in BrowserRouter
export default function App() {
    return (
        <BrowserRouter>
            <AppRoutesWithLayout />
        </BrowserRouter>
    );
}
