"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export function PrivacyPolicyModal() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    function closeModal() {
        setClosing(true);
    }

    useEffect(() => {
        if (!open) return;
        const dialog = dialogRef.current;
        const trigger = triggerRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog?.showModal();
        document.body.style.overflow = "hidden";
        return () => {
            dialog?.close();
            document.body.style.overflow = previousOverflow;
            trigger?.focus({ preventScroll: true });
        };
    }, [open]);

    return (
        <>
            <button ref={triggerRef} type="button" onClick={() => { setClosing(false); setOpen(true); }} aria-haspopup="dialog" className="cursor-pointer transition hover:text-white">
                Política de Privacidad
            </button>
            {open && createPortal(
                <dialog
                    ref={dialogRef}
                    aria-labelledby="privacy-title"
                    data-closing={closing}
                    onCancel={(event) => { event.preventDefault(); closeModal(); }}
                    onClose={() => setOpen(false)}
                    onAnimationEnd={(event) => {
                        if (event.target === event.currentTarget && event.animationName === "privacy-modal-out") {
                            setOpen(false);
                        }
                    }}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) closeModal();
                    }}
                    className="privacy-modal m-auto max-h-[92dvh] w-[calc(100%_-_1rem)] max-w-3xl sm:w-[calc(100%_-_3rem)] overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl border-0 bg-[#f5f7f1] p-0 text-left shadow-2xl backdrop:bg-emerald-950/75 backdrop:backdrop-blur-sm"
                >
                    <PrivacyPolicyContent onClose={closeModal} />
                </dialog>,
                document.body,
            )}
        </>
    );
}
