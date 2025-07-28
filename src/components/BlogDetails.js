// src/components/BlogDetails.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/blogs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// 1️⃣ First, import your shade image.
//    Put `shade.png` (the file you showed) into `src/assets/`
import shade from '../assets/shade.jpg';

export default function BlogDetails() {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === id);

    // 2️⃣ In the effect, we set the body background to black + your shade overlay.
    useEffect(() => {
        const bodyStyle = document.body.style;
        // backup
        const prevBgColor = bodyStyle.backgroundColor;
        const prevBgImage = bodyStyle.backgroundImage;
        const prevBgSize  = bodyStyle.backgroundSize;
        const prevBgPos   = bodyStyle.backgroundPosition;
        const prevBgRep   = bodyStyle.backgroundRepeat;
        const prevBgAtt   = bodyStyle.backgroundAttachment;

        bodyStyle.backgroundColor   = '#000';
        bodyStyle.backgroundImage   = `url(${shade})`;
        bodyStyle.backgroundSize    = 'cover';
        bodyStyle.backgroundPosition= 'center';
        bodyStyle.backgroundRepeat  = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';

        return () => {
            // restore
            bodyStyle.backgroundColor    = prevBgColor;
            bodyStyle.backgroundImage    = prevBgImage;
            bodyStyle.backgroundSize     = prevBgSize;
            bodyStyle.backgroundPosition = prevBgPos;
            bodyStyle.backgroundRepeat   = prevBgRep;
            bodyStyle.backgroundAttachment = prevBgAtt;
        };
    }, []);

    // 3️⃣ “Not found” screen uses same background
    if (!blog) {
        return (
            <div
                style={{
                    padding: '2rem',
                    minHeight: '100vh',
                    color: '#fff',
                    backgroundColor: '#000',
                    backgroundImage: `url(${shade})`,
                    backgroundSize:    'cover',
                    backgroundPosition:'center',
                    backgroundRepeat:  'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                <p>Blog not found.</p>
            </div>
        );
    }

    // 4️⃣ Your normal blog-detail render:
    return (
        <section
            style={{
                maxWidth: 900,
                margin: '2rem auto',
                padding: '1rem',
                backgroundColor: 'transparent', // slightly translucent so you still see the shade behind
                color: '#fff',
                borderRadius: 14,
            }}
        >
            <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
                {blog.title}
            </h2>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5rem',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: 4700,
                        borderRadius: 14,
                        overflow: 'hidden',
                    }}
                >
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        style={{ width: '100%', height: 360 }}
                    >
                        {blog.images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={img}
                                    alt={`${blog.title} #${i + 1}`}
                                    style={{
                                        width: '100%',
                                        height: 360,
                                        objectFit: 'cover',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div style={{ width: '100%', maxWidth: 4700 }}>
                    {blog.paragraphs.map((p, i) => (
                        <p
                            key={i}
                            style={{
                                fontSize: '1rem',
                                marginBottom: '5rem',
                                lineHeight: 1.7,
                            }}
                        >
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
