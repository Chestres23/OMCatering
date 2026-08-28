"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
    const [visible, setVisible] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }

        if (!("IntersectionObserver" in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -60px 0px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:transition-none ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
