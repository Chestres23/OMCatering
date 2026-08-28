"use client";

import { useEffect, useState } from "react";

export function WhatsAppFloat() {
    const [visible, setVisible] = useState(false);
    const [pulse, setPulse] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500);
        const pulseTimer = setTimeout(() => setPulse(false), 10000);
        return () => {
            clearTimeout(timer);
            clearTimeout(pulseTimer);
        };
    }, []);

    return (
        <a
            href="https://wa.me/593981942383"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatea con nosotros por WhatsApp"
            className={`fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-600/30 transition-all duration-500 hover:scale-110 hover:bg-green-600 hover:shadow-xl hover:shadow-green-600/40 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${pulse ? "animate-bounce" : ""}`}
        >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.3-.7-1.5-.8s-.4-.1-.6.1-.6.8-.7 1-.3.2-.6 0a6.7 6.7 0 0 1-2-1.2 7.3 7.3 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.6l.4-.5.2-.4c.1-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2c0 1.3 1 2.6 1 2.8.2.2 2 3.2 4.9 4.3.7.3 1.3.5 1.8.6.8.2 1.5.1 2.1.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.2-.5-.3Z" />
            </svg>
        </a>
    );
}
