
"use client";

import { useEffect, useState } from "react";

export default function useReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const scrolled = (scrollTop / docHeight) * 100;

            setProgress(Math.min(100, Math.max(0, scrolled)));
        };

        window.addEventListener("scroll", update);
        update();

        return () => window.removeEventListener("scroll", update);
    }, []);

    return progress;
}