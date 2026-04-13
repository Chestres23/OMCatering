import { ImageResponse } from "next/og";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background:
                        "linear-gradient(120deg, #064e3b 0%, #065f46 55%, #0f766e 100%)",
                    padding: "64px",
                    color: "#ffffff",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        letterSpacing: 4,
                        textTransform: "uppercase",
                        color: "#fcd34d",
                    }}
                >
                    O M Catering Empresarial
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: 68,
                            lineHeight: 1.06,
                            fontWeight: 700,
                        }}
                    >
                        <span>Alimentación masiva</span>
                        <span>con calidad y compromiso</span>
                    </div>
                    <div style={{ fontSize: 30, color: "#d1fae5" }}>
                        +2800 comensales | 7 localidades | Operación confiable
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <div style={{ fontSize: 24, color: "#fde68a" }}>
                        Seguridad alimentaria y puntualidad operacional
                    </div>
                    <div
                        style={{
                            background: "#fbbf24",
                            color: "#052e2b",
                            borderRadius: 999,
                            padding: "12px 22px",
                            fontSize: 22,
                            fontWeight: 700,
                        }}
                    >
                        Cotiza hoy
                    </div>
                </div>
            </div>
        ),
        size
    );
}
