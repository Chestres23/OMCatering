"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ImageCarouselProps = {
    images: { src: string; alt: string }[];
    /** Interval in ms between transitions */
    interval?: number;
    className?: string;
};

export function ImageCarousel({ images, interval = 4000, className = "" }: ImageCarouselProps) {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [next, interval, images.length]);

    if (images.length === 0) return null;

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {images.map((img, index) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={540}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}
            {/* Dots indicator */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                index === current ? "w-5 bg-white" : "w-1.5 bg-white/50"
                            }`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
