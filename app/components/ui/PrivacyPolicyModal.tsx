"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export function PrivacyPolicyModal() {
    const [open, setOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (!open) return;
        const dialog = dialogRef.current;
        const previousOverflow = document.body.style.overflow;
        dialog?.showModal();
        document.body.style.overflow = "hidden";
        return () => {
            dialog?.close();
            document.body.style.overflow = previousOverflow;
        };
    }, [open]);

    return (
        <>
            <button type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" className="cursor-pointer transition hover:text-white">
                Política de Privacidad
            </button>
            {open && createPortal(
                <dialog
                    ref={dialogRef}
                    aria-labelledby="privacy-title"
                    onCancel={() => setOpen(false)}
                    onClose={() => setOpen(false)}
                    onClick={(event) => {
                        if (event.target === event.currentTarget) setOpen(false);
                    }}
                    className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto overscroll-contain rounded-3xl border-0 bg-[#f5f7f1] p-0 text-left shadow-2xl backdrop:bg-emerald-950/75 backdrop:backdrop-blur-sm"
                >
                    <PrivacyPolicyContent onClose={() => setOpen(false)} />
                </dialog>,
                document.body,
            )}
        </>
    );
}
