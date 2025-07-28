import React, {useEffect, useEffectState, useState} from 'react';

export default function ScrollToTopButton({
                                              size = 30,          // diameter of the circular button in pixels
                                              iconSize = '1.5rem',  // font-size for the arrow icon
                                              visibleOffset = 200 // scroll offset in px to trigger visibility
                                          }) {
    const [visible, setVisible] = useState(false);

    // Toggle visibility when scrolled beyond visibleOffset
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > visibleOffset);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [visibleOffset]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            style={{
                position: 'fixed',
                right: 22,
                bottom: 32,
                width: size,
                height: size,
                background: '#666666',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'auto' : 'none',
                transition: 'opacity 0.2s, transform 0.2s',
                zIndex: 1000,
                fontSize: iconSize,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: visible ? 'translateY(0)' : `translateY(${size}px)`,
            }}
        >
            ↑
        </button>
    );
}

/*
Usage example:
<ScrollToTopButton size={60} iconSize="3rem" visibleOffset={300} />
*/
