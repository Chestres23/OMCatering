"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ImageCarouselProps = {
    images: { src: string; alt: string }[];
    /** Interval in ms between transitions */
    interval?: number;
    className?: string;
};

export function ImageCarousel({ images, interval = 4000, className = "" }: ImageCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const previous = useCallback(() => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
        touchStartX.current = event.touches[0]?.clientX ?? null;
    }

    function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
        if (touchStartX.current === null) {
            return;
        }

        const touchEndX = event.changedTouches[0]?.clientX;
        const distance = touchEndX === undefined ? 0 : touchEndX - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(distance) < 45) {
            return;
        }

        if (distance < 0) {
            next();
        } else {
            previous();
        }
    }

    useEffect(() => {
        if (images.length <= 1 || isPaused) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [isPaused, next, interval, images.length]);

    if (images.length === 0) return null;

    return (
        <div
            className={`group relative overflow-hidden ${className}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
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

            {images.length > 1 && (
                <>
                    <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                        <button
                            type="button"
                            onClick={previous}
                            aria-label="Foto anterior"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-emerald-950/55 text-white shadow-lg backdrop-blur transition hover:bg-emerald-950/80"
                        >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <span className="rounded-full border border-white/20 bg-emerald-950/55 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/90 backdrop-blur">
                            {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                        </span>
                        <button
                            type="button"
                            onClick={next}
                            aria-label="Siguiente foto"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-emerald-950/55 text-white shadow-lg backdrop-blur transition hover:bg-emerald-950/80"
                        >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent px-4 pb-3 pt-12">
                        <div className="flex items-end justify-between gap-3">
                            <span aria-hidden="true" />
                            <div className="flex items-center gap-1.5">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setCurrent(index)}
                                        aria-label={`Ir a imagen ${index + 1}`}
                                        aria-current={index === current}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            index === current ? "w-6 bg-amber-300" : "w-1.5 bg-white/55 hover:bg-white"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {images.length === 1 && (
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-emerald-950/65 to-transparent" />
            )}
        </div>
    );
}
