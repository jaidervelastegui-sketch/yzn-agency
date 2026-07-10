import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      className="relative isolate flex h-screen items-center overflow-hidden bg-[#030303] pt-20"
      data-motion-section="hero"
      id="inicio"
    >
      <style>{`
        .hero-spotlight {
          animation: heroSpotlight 22s ease-in-out infinite alternate;
        }

        .hero-glow {
          animation: heroGlow 18s ease-in-out infinite alternate;
        }

        .hero-noise {
          background-image:
            radial-gradient(circle at 18% 22%, rgba(255,255,255,0.05) 0 1px, transparent 1.35px),
            radial-gradient(circle at 72% 64%, rgba(255,255,255,0.035) 0 1px, transparent 1.4px);
          background-size: 46px 46px, 71px 71px;
        }

        .hero-particle {
          animation: heroParticle 16s ease-in-out infinite alternate;
        }

        .hero-poster {
          animation: heroPoster 14s ease-in-out infinite alternate;
        }

        .poster-reflection {
          animation: posterReflection 11s ease-in-out infinite alternate;
        }

        @keyframes heroSpotlight {
          from { transform: translate3d(-2%, -1%, 0) scale(1); opacity: 0.72; }
          to { transform: translate3d(2%, 1%, 0) scale(1.06); opacity: 0.96; }
        }

        @keyframes heroGlow {
          from { transform: translate3d(0, 10px, 0) scale(0.98); opacity: 0.55; }
          to { transform: translate3d(0, -12px, 0) scale(1.08); opacity: 0.82; }
        }

        @keyframes heroParticle {
          from { transform: translate3d(0, 0, 0); opacity: 0.14; }
          to { transform: translate3d(14px, -18px, 0); opacity: 0.34; }
        }

        @keyframes heroPoster {
          from { transform: translate3d(0, 8px, 0) rotate(-1deg); }
          to { transform: translate3d(0, -8px, 0) rotate(1deg); }
        }

        @keyframes posterReflection {
          from { transform: translateX(-18%) rotate(16deg); opacity: 0.18; }
          to { transform: translateX(18%) rotate(16deg); opacity: 0.34; }
        }
      `}</style>

      <div className="absolute inset-0 -z-30 bg-[#030303]" />
      <div className="hero-spotlight absolute left-[42%] top-[-18%] -z-20 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.09),rgba(168,85,247,0.09)_34%,transparent_68%)] blur-2xl" />
      <div className="hero-glow absolute right-[6%] top-[26%] -z-20 h-[28rem] w-[28rem] rounded-full bg-violet-500/13 blur-[120px]" />
      <div className="hero-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.18] mix-blend-screen" />

      <span className="hero-particle absolute left-[10%] top-[31%] h-1 w-1 rounded-full bg-violet-100/45 shadow-[0_0_22px_rgba(221,214,254,0.55)]" />
      <span className="hero-particle absolute left-[51%] top-[22%] h-1 w-1 rounded-full bg-white/30 shadow-[0_0_18px_rgba(255,255,255,0.38)] [animation-delay:3s]" />
      <span className="hero-particle absolute right-[16%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-violet-200/30 shadow-[0_0_24px_rgba(196,181,253,0.42)] [animation-delay:6s]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(20rem,0.4fr)] xl:gap-20" data-motion-group>
          <div className="max-w-5xl py-8 sm:py-12" data-motion-group>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.5em] text-violet-100/68" data-motion-text>
              Agencia Creativa
            </p>

            <h1 className="mt-12 text-6xl font-black leading-none tracking-[-0.1em] text-white sm:text-8xl lg:text-[8.5rem] xl:text-[10rem]" data-motion-title>
              YZN
            </h1>

            <h2 className="mt-14 max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.5rem] xl:text-[6rem]" data-motion-title>
              Creamos experiencias digitales que dejan huella.
            </h2>

            <p className="mt-10 max-w-xl text-base leading-8 text-white/62 sm:text-lg" data-motion-text>
              Producción audiovisual, diseño, branding y contenido para marcas que quieren destacar.
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row" data-motion-group>
              <Button className="px-8 py-4" href="#portafolio">
                Ver proyectos
              </Button>
              <Button className="px-8 py-4" href="#contacto" variant="secondary">
                Hablemos
              </Button>
            </div>
          </div>

          <div className="relative hidden justify-self-end lg:block" aria-hidden="true" data-motion-visual>
            <div className="absolute -inset-16 rounded-full bg-violet-500/9 blur-[110px]" />
            <div className="hero-poster relative aspect-[0.78] w-[25rem] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.04] p-3 shadow-[0_34px_130px_rgba(0,0,0,0.48),0_0_70px_rgba(168,85,247,0.18)] backdrop-blur-2xl xl:w-[29rem]">
              <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              <div className="absolute inset-y-16 right-0 w-px bg-gradient-to-b from-transparent via-violet-100/28 to-transparent" />

              <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_78%_38%,rgba(196,181,253,0.28),transparent_27%),linear-gradient(145deg,#f8f6ff_0%,#6d28d9_22%,#17051f_47%,#030303_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.72)),linear-gradient(115deg,transparent_0_39%,rgba(255,255,255,0.34)_40%,transparent_43%)]" />
                <div className="poster-reflection absolute -left-24 top-0 h-full w-36 bg-gradient-to-r from-transparent via-white/28 to-transparent blur-sm" />
                <div className="absolute inset-5 rounded-[1.35rem] border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" />

                <div className="absolute left-8 right-8 top-8 flex items-center justify-between text-[0.62rem] font-bold uppercase tracking-[0.38em] text-white/70">
                  <span>Brand Artifact</span>
                  <span>01</span>
                </div>

                <div className="absolute left-9 top-28 h-32 w-32 rounded-full border border-white/16 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md" />
                <div className="absolute right-11 top-36 h-52 w-24 rounded-full border border-violet-100/18 bg-violet-200/12 blur-[1px]" />
                <div className="absolute left-10 top-60 h-px w-48 rotate-[-18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent shadow-[0_0_24px_rgba(255,255,255,0.25)]" />
                <div className="absolute bottom-32 right-10 h-24 w-24 rotate-45 border border-white/14 bg-black/10 backdrop-blur-md" />

                <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/12 bg-black/28 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
                  <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.38em] text-violet-100/70">
                    Visual System
                  </p>
                  <p className="text-3xl font-semibold leading-none tracking-[-0.065em] text-white xl:text-4xl">
                    Una pieza de branding creada solo con luz, vidrio y contraste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
