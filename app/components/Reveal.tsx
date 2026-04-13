"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }

        const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        if (!isDesktop || shouldReduceMotion || !("IntersectionObserver" in window)) {
            const fallbackTimer = window.setTimeout(() => {
                setVisible(true);
            }, 0);

            return () => window.clearTimeout(fallbackTimer);
        }

        const fallbackTimer = window.setTimeout(() => {
            setVisible(true);
        }, 1200);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.clearTimeout(fallbackTimer);
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        observer.observe(element);

        return () => {
            window.clearTimeout(fallbackTimer);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                visible
                    ? "md:translate-y-0 md:opacity-100"
                    : "md:translate-y-8 md:opacity-0"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
