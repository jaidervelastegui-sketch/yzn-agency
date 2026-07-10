import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const projects = [
  {
    title: "Dôm",
    category: "Identidad de marca",
    year: "2026",
    description: "Un sistema visual que fusiona la precisión japonesa con la calidez brasileña. Desde el logotipo hasta la experiencia en mesa, cada detalle fue pensado para que dos culturas conversaran a través del diseño.",
    accent: "fuchsia",
    visual:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.55),transparent_18%),radial-gradient(circle_at_68%_72%,rgba(217,70,239,0.38),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(217,70,239,0.18)_42%,rgba(0,0,0,0.12))]",
    panel:
      "bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.3),rgba(217,70,239,0.16)_50%,transparent_80%)] shadow-[0_0_130px_rgba(217,70,239,0.35)]",
  },
  {
    title: "Ritual",
    category: "Branding sensorial",
    year: "2026",
    description: "Una identidad digital construida desde el silencio, el movimiento consciente y la luz suave. Definimos la interfaz, el tono de voz y el universo visual completo para una plataforma de bienestar emocional.",
    accent: "violet",
    visual:
      "bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.5),transparent_22%),radial-gradient(circle_at_30%_20%,rgba(196,181,253,0.4),transparent_35%),linear-gradient(145deg,rgba(255,255,255,0.1),rgba(168,85,247,0.2)_50%,rgba(0,0,0,0.12))]",
    panel:
      "bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.3),rgba(168,85,247,0.16)_50%,transparent_80%)] shadow-[0_0_130px_rgba(168,85,247,0.35)]",
  },
  {
    title: "Taller de Bosque",
    category: "Contenido digital",
    year: "2025",
    description: "Un ecosistema de contenido modular para una marca de diseño artesanal en Guadalajara. Creamos piezas editoriales, dirección de redes y una campaña de lanzamiento centrada en el proceso, la madera y la luz natural.",
    accent: "emerald",
    visual:
      "bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.52),transparent_20%),radial-gradient(circle_at_20%_70%,rgba(16,185,129,0.4),transparent_30%),linear-gradient(145deg,rgba(255,255,255,0.1),rgba(16,185,129,0.2)_40%,rgba(0,0,0,0.12))]",
    panel:
      "bg-[radial-gradient(circle_at_60%_30%,rgba(255,255,255,0.3),rgba(16,185,129,0.16)_50%,transparent_80%)] shadow-[0_0_130px_rgba(16,185,129,0.35)]",
  },
  {
    title: "Club Milán",
    category: "Campaña premium",
    year: "2026",
    description: "Una campaña de alto impacto para el lanzamiento de un club privado en la Roma. Dirección creativa, piezas gráficas, invitaciones y activación digital con un lenguaje visual audaz y contemporáneo.",
    accent: "sky",
    visual:
      "bg-[radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.5),transparent_20%),radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.38),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(56,189,248,0.2)_45%,rgba(0,0,0,0.12))]",
    panel:
      "bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.3),rgba(56,189,248,0.16)_50%,transparent_80%)] shadow-[0_0_130px_rgba(56,189,248,0.35)]",
  },
];

const accents = {
  emerald: "bg-emerald-200/80 shadow-[0_0_34px_rgba(110,231,183,0.38)]",
  fuchsia: "bg-fuchsia-200/80 shadow-[0_0_34px_rgba(245,208,254,0.38)]",
  sky: "bg-sky-200/80 shadow-[0_0_34px_rgba(186,230,253,0.38)]",
  violet: "bg-violet-200/80 shadow-[0_0_34px_rgba(221,214,254,0.38)]",
};

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40" data-motion-section="portfolio" id="portafolio">
      <div className="absolute right-[-18rem] top-20 -z-10 h-[42rem] w-[42rem] rounded-full bg-violet-500/9 blur-[150px]" />
      <div className="absolute left-[-16rem] bottom-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-white/[0.035] blur-[130px]" />

      <Container>
        <SectionTitle eyebrow="Portafolio" title="Cuatro universos. Una misma obsesión por el detalle.">
          Showcase de proyectos concebidos como piezas de agencia: dirección, sistema visual y presencia premium.
        </SectionTitle>

        <div className="space-y-12 lg:space-y-16" data-motion-group>
          {projects.map((project, index) => (
            <Card className="p-2 sm:p-3" data-motion-item={`project-${index + 1}`} key={project.title}>
              <div className="group/case relative min-h-[42rem] overflow-hidden rounded-[2rem] lg:min-h-[46rem]">
                <div className={`absolute inset-0 ${project.visual}`} data-motion-visual />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.02)_36%,rgba(0,0,0,0)_68%,rgba(0,0,0,0.02)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:84px_84px] opacity-45 [mask-image:radial-gradient(circle_at_70%_45%,black,transparent_70%)]" />
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]" />
                <div className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />

                <div className="absolute bottom-[10%] left-[4%] h-[38%] w-[34%] rounded-full bg-gradient-to-r from-white/[0.06] to-transparent blur-3xl" />

                <div className={`absolute right-[4%] top-[10%] h-[64%] w-[48%] rounded-[2.5rem] ${project.panel} border border-white/15 opacity-90 transition-all duration-700 group-hover/case:scale-105 group-hover/case:opacity-100 backdrop-blur-sm`} />

                <div className="absolute right-8 top-8 hidden h-40 w-40 rounded-full border border-white/24 bg-white/[0.09] backdrop-blur-md transition duration-700 group-hover/case:scale-110 group-hover/case:border-white/36 md:block" />
                <div className="absolute right-20 top-28 hidden h-64 w-28 rounded-full border border-white/20 bg-white/[0.08] blur-[1px] transition duration-700 group-hover/case:-translate-y-3 md:block" />
                <div className="absolute right-16 bottom-28 hidden h-px w-80 rotate-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.4)] md:block" />
                <div className="absolute bottom-16 right-28 hidden h-28 w-28 rotate-45 border border-white/20 bg-black/4 backdrop-blur-md transition duration-700 group-hover/case:rotate-[52deg] lg:block" />

                <div className="relative z-10 flex min-h-[42rem] flex-col justify-between p-8 sm:p-10 lg:min-h-[46rem] lg:p-14">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.44em] text-white/72" data-motion-text>
                        {project.category}
                      </p>
                      <div className={`mt-5 h-1 w-20 rounded-full ${accents[project.accent]}`} />
                    </div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.4em] text-white/65" data-motion-text>
                      {project.year}
                    </p>
                  </div>

                  <div className="grid gap-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
                    <div>
                      <span className="mb-6 block text-[6rem] font-black leading-none tracking-[-0.12em] text-white/[0.34] sm:text-[9rem] lg:text-[12rem]" data-motion-text>
                        0{index + 1}
                      </span>
                      <h3 className="text-6xl font-semibold leading-[0.86] tracking-[-0.09em] text-white sm:text-8xl lg:text-[8rem] xl:text-[9.25rem]" data-motion-title>
                        {project.title}
                      </h3>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/22 bg-black/4 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.14)] backdrop-blur-2xl transition duration-700 group-hover/case:border-violet-100/45 group-hover/case:bg-black/8" data-motion-group>
                      <p className="text-lg font-semibold leading-7 tracking-[-0.035em] text-white sm:text-xl" data-motion-text>
                        {project.description}
                      </p>
                      <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/26 pt-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/78">
                        <span>Proyecto</span>
                        <span>YZN</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
