import React, {useEffect, useState, useStateEffect} from 'react';
import newsblog from '../assets/cover/newsblog.jpg';

import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './BlogList.css';


function BlogCard({ blog }) {
    // Use blog.images (your data) or fallback to [blog.cover]
    const images = blog.images && blog.images.length > 0 ? blog.images : [blog.cover];
    const [imgIdx, setImgIdx] = useState(0);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let interval = null;
        if (hovered && images.length > 1) {
            interval = setInterval(() => {
                setImgIdx(prevIdx => (prevIdx + 1) % images.length);
            }, 3000);
        } else {
            setImgIdx(0); // Reset to first image when not hovered
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [hovered, images.length]);

    return (
        <Link
            to={`/blog/${blog.id}`}
            className="blog-bl-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={images[imgIdx]}
                alt={blog.title}
                className="blog-bl-card-img"
                draggable={false}
            />
            <div className="blog-bl-card-body">
                <h4 className="blog-bl-card-title">{blog.title}</h4>
            </div>
        </Link>
    );
}

export default function BlogList() {
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

    // Sort blogs by date (newest first)
    const sortedBlogs = [...blogs].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    return (
        <>
            <div className="gfs-banner-wrapper">
                <div className="gfs-banner">
                    <img src={newsblog} alt="Blog Banner" />
                    <div
                        className="gfs-banner-overlay"
                        style={{ opacity: overlayOpacity }}
                    >
                        <h1>Our Blog</h1>
                        <p>
                            Explore insights, stories, and updates from the world of fire safety, security, and community protection by GAGE.
                        </p>
                    </div>
                </div>
            </div>

            <section className="bloglist-container">
                <h2 className="bloglist-title">Our Blog</h2>
                <div className="bloglist-grid">
                    {sortedBlogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </section>
        </>
    );
}
