import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import './BlogPreview.css';
import { motion } from 'framer-motion'; // <-- Added this import!

export default function BlogPreview() {
    return (
        <motion.section
            initial={{opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.7, delay: 0.7}}

            className="blog-row">
            <div className="blog-row-list">
                {blogs.slice(0, 3).map((blog) => (
                    <Link to={`/blog/${blog.id}`} className="blog-card" key={blog.id}>
                        <img src={blog.cover} alt={blog.title} />
                        <h4>{blog.title}</h4>
                    </Link>
                ))}
            </div>
            <div className="blog-row-more">
                <Link to="/blog" className="blog-more-link">
                    <span>More in our Blog</span>
                    <span className="arrow">&#8594;</span>
                </Link>
            </div>
        </motion.section>
    );
}
