"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
    useEffect(() => {
        gsap.from(".fade-in", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            scrollTrigger: {
                trigger: ".fade-in",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        gsap.from(".scale-up", {
            scale: 0.8,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".scale-up",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);
};

export default useGsapAnimations;
