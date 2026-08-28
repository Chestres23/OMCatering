type SectionTitleProps = {
    eyebrow: string;
    title: string;
    description: string;
    tone?: "default" | "light";
};

export function SectionTitle({
    eyebrow,
    title,
    description,
    tone = "default",
}: SectionTitleProps) {
    const eyebrowClass =
        tone === "light" ? "text-amber-300" : "text-emerald-700";
    const titleClass = tone === "light" ? "text-white" : "text-emerald-950";
    const descriptionClass =
        tone === "light" ? "text-emerald-50/90" : "text-slate-600";

    return (
        <div className="max-w-3xl space-y-3">
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>{eyebrow}</p>
            <h2 className={`font-serif text-3xl leading-tight sm:text-4xl ${titleClass}`}>{title}</h2>
            <p className={`text-base leading-7 sm:text-lg ${descriptionClass}`}>{description}</p>
        </div>
    );
}
