"use client";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    let scroll: LocomotiveScroll | null = null;

    useEffect(() => {
        if (!scrollRef.current) return;

        scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1, // Smoothness level
            getDirection: true, // Enables scroll direction tracking
            smartphone: {
                smooth: true,
            },
            tablet: {
                smooth: true,
            },
        });

        // Fix for resize issue
        const handleResize = () => {
            scroll?.update();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            scroll?.destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef} className="relative">
            <div data-scroll-section className="overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default SmoothScrollProvider;
