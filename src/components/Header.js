import React, {useEffect, useEffectState, useState} from 'react';
import {Link, LinkLocation, useLocation} from 'react-router-dom';
import './Header.css';
import logoBlack from '../assets/images/gageclient.png'
import logoWhite from '../assets/images/gage_logob.png'


const navItems = [
    { to: '/about-us',        label: 'ABOUT US' },
    { to: '/gage-security',   label: 'GAGE SECURITY' },
    { to: '/gage-fire-safety',label: 'GAGE FIRE SAFETY' },
    { to: '/gage-training',   label: 'GAGE INSTITUTE' },
    { to: '/careers',         label: 'CAREERS' },
    { to: '/blog',            label: 'NEWS & BLOG' },
    { to: '/contact-us',      label: 'CONTACT US' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    // close mobile menu on nav
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // track scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const headerClass = [
        'main-header',
        scrolled ? 'main-header--scrolled' : '',
        !isHome   ? 'main-header--not-home' : ''
    ].filter(Boolean).join(' ');


    return (
        <header className={headerClass}>
            <div className="main-header-inner">
                <Link to="/" className="main-logo">
                    <img
                        src={scrolled ? logoWhite : logoBlack}
                        alt="GAGE Logo"
                        className="main-logo__img"
                    />
                </Link>

                {/* Hamburger */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(open => !open)}
                    aria-label="Toggle navigation"
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="header-nav-item"
                            tabIndex={0}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
