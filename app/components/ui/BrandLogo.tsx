import Image from "next/image";

export function BrandLogo() {
    return (
        <div>
              <div className="relative mx-auto w-fit">
                <span className="absolute -left- -top-2 h-12 w-12 rounded-full bg-amber-300/35 blur-xl" />
                <span className="absolute -bottom-2 -right-2 h-14 w-14 rounded-full bg-emerald-200/30 blur-xl" />
                <div className="relative rounded-full bg-gradient-to-br from-amber-300 via-amber-200 to-white p-[3px] shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
                  <div className="rounded-full bg-emerald-950/35 p-2 backdrop-blur">
                    <Image
                      src="/logo.jpeg"
                      alt="Identidad visual de O M Catering"
                      width={300}
                      height={300}
                      className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                    />
                  </div>
                </div>
              </div>
              <p className="font-script mt-2 text-center text-2xl leading-none text-amber-200 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] sm:text-3xl" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 0 40px rgba(0,0,0,0.3)" }}>
                Mi sazón, mi pasión
              </p>
        </div>
    );
}
