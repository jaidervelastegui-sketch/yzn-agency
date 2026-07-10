import Link from "next/link";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolioProjects as projects, portfolioAccents as accents } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-40" data-motion-section="portfolio" id="portafolio">
      <div className="absolute right-[-18rem] top-20 -z-10 h-[42rem] w-[42rem] rounded-full bg-violet-500/9 blur-[150px]" />
      <div className="absolute left-[-16rem] bottom-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-white/[0.035] blur-[130px]" />

      <Container>
        <SectionTitle eyebrow="Portafolio" title="Cuatro universos. Una misma obsesión por el detalle.">
          Showcase de proyectos concebidos como piezas de agencia: dirección, sistema visual y presencia premium.
        </SectionTitle>

        <div className="space-y-12 lg:space-y-16" data-motion-group>
          {projects.map((project, index) => (
            <Card className="p-2 sm:p-3" data-motion-item={`project-${index + 1}`} key={project.title}>
              <div className="group/case relative min-h-[32rem] sm:min-h-[42rem] overflow-hidden rounded-[2rem] lg:min-h-[46rem]">
                <div className={`absolute inset-0 ${project.visual}`} data-motion-visual />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.02)_36%,rgba(0,0,0,0)_68%,rgba(0,0,0,0.02)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:84px_84px] opacity-45 [mask-image:radial-gradient(circle_at_70%_45%,black,transparent_70%)]" />
                <div className="absolute inset-6 rounded-[1.5rem] border border-white/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-700 group-hover/case:border-white/36 group-hover/case:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
                <div className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-700 group-hover/case:via-white/90 group-hover/case:scale-x-105" />

                <div className="absolute bottom-[10%] left-[4%] h-[38%] w-[34%] rounded-full bg-gradient-to-r from-white/[0.06] to-transparent blur-3xl transition-all duration-700 group-hover/case:scale-110 group-hover/case:opacity-80" />

                <div className={`absolute right-[4%] top-[10%] h-[64%] w-[48%] rounded-[2.5rem] ${project.panel} border border-white/15 opacity-90 transition-all duration-700 group-hover/case:scale-105 group-hover/case:opacity-100 backdrop-blur-sm`} />

                <div className="absolute right-8 top-8 hidden h-40 w-40 rounded-full border border-white/24 bg-white/[0.09] backdrop-blur-md transition duration-700 group-hover/case:scale-110 group-hover/case:border-white/36 md:block" />
                <div className="absolute right-20 top-28 hidden h-64 w-28 rounded-full border border-white/20 bg-white/[0.08] blur-[1px] transition duration-700 group-hover/case:-translate-y-3 md:block" />
                <div className="absolute right-16 bottom-28 hidden h-px w-80 rotate-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_50px_rgba(255,255,255,0.4)] md:block" />
                <div className="absolute bottom-16 right-28 hidden h-28 w-28 rotate-45 border border-white/20 bg-black/4 backdrop-blur-md transition duration-700 group-hover/case:rotate-[52deg] lg:block" />

                <div className="relative z-10 flex min-h-[32rem] sm:min-h-[42rem] flex-col justify-between p-6 sm:p-10 lg:min-h-[46rem] lg:p-14">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.44em] text-white/72" data-motion-text>
                        {project.category}
                      </p>
                      <div className={`mt-5 h-1 w-20 rounded-full transition-all duration-700 group-hover/case:w-32 group-hover/case:opacity-100 ${accents[project.accent]}`} />
                    </div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.4em] text-white/65" data-motion-text>
                      {project.year}
                    </p>
                  </div>

                  <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
                    <div>
                      <span className="mb-4 sm:mb-6 block text-[3.5rem] sm:text-[6rem] font-black leading-none tracking-[-0.12em] text-white/[0.34] sm:text-[9rem] lg:text-[12rem]" data-motion-text>
                        0{index + 1}
                      </span>
                      <h3 className="text-4xl sm:text-6xl font-semibold leading-[0.86] tracking-[-0.09em] text-white sm:text-8xl lg:text-[8rem] xl:text-[9.25rem]" data-motion-title>
                        {project.title}
                      </h3>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/22 bg-black/6 p-5 sm:p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] shadow-black/30 backdrop-blur-2xl transition-all duration-700 group-hover/case:border-violet-100/45 group-hover/case:bg-black/10 group-hover/case:shadow-[0_32px_100px_rgba(0,0,0,0.3)]" data-motion-group>
                      <p className="text-base sm:text-lg font-semibold leading-6 sm:leading-7 tracking-[-0.035em] text-white sm:text-xl" data-motion-text>
                        {project.description}
                      </p>
                      {project.services && project.services.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5" data-motion-text>
                          {project.services.map((s) => (
                            <span key={s} className="text-[0.55rem] font-bold uppercase tracking-[0.28em] text-white/42">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link
                        className="group mt-4 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-violet-100/78 transition duration-300 hover:text-violet-100"
                        href={`/portfolio/${project.slug}`}
                      >
                        <span>Ver proyecto</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                      <div className="mt-4 sm:mt-5 flex items-center justify-between gap-4 border-t border-white/26 pt-4 sm:pt-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/78">
                        <span>Cliente</span>
                        <span>{project.client}</span>
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
