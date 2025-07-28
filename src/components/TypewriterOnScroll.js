import React, {useEffect, useRef, useState, useStateEffectRef} from 'react';

export default function TypewriterOnScroll({
                                               text,
                                               as = "p",          // Default element is <p>
                                               speed = 48,         // ms per character
                                               style = {},
                                               className = "",
                                           }) {
    const [showed, setShowed] = useState("");
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef();

    // Start typing when in view
    useEffect(() => {
        const onScroll = () => {
            if (!ref.current || hasStarted) return;
            const { top, bottom } = ref.current.getBoundingClientRect();
            if (top < window.innerHeight - 80 && bottom > 0) {
                setHasStarted(true);
            }
        };
        window.addEventListener("scroll", onScroll);
        // run immediately
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [hasStarted]);

    // Typing animation
    useEffect(() => {
        if (!hasStarted) return;
        let i = 0;
        setShowed("");
        const timer = setInterval(() => {
            setShowed(text.slice(0, ++i));
            if (i >= text.length) clearInterval(timer);
        }, speed);
        return () => clearInterval(timer);
    }, [hasStarted, text, speed]);

    const Tag = as;

    return (
        <Tag ref={ref} style={style} className={className}>
            {showed}
            <span
                className="tw-cursor"
                style={{
                    fontSize: "10rem", // 👈 Change this to your desired size!
                    opacity: showed.length < text.length ? 1 : 0,
                    verticalAlign: "middle", // Optional: aligns it nicely with text
                }}
            >
  ▋
</span>

        </Tag>
    );
}
