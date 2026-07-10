import Container from "@/components/ui/Container";

export default function PortfolioHero({ project }) {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-[#030303] pt-32 pb-20">
      <div className="absolute right-[-18rem] top-20 -z-10 h-[42rem] w-[42rem] rounded-full bg-violet-500/9 blur-[150px]" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.5em] text-violet-100/68">
              {project.category}
            </p>
            <h1 className="mt-6 text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-[-0.1em] text-white">
              {project.title}
            </h1>
            <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.34em] text-white/48">
              {project.year}
            </p>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              {project.description}
            </p>
          </div>

          <div className="relative hidden aspect-[0.78] w-full max-w-[26rem] justify-self-end overflow-hidden rounded-[2rem] border border-white/[0.12] shadow-[0_34px_130px_rgba(0,0,0,0.48)] lg:block">
            <div className={`absolute inset-0 ${project.visual}`} />
            <div
              className={`absolute right-[6%] top-[10%] h-[55%] w-[55%] rounded-[2.5rem] border border-white/15 backdrop-blur-sm ${project.panel}`}
            />
            <div className="absolute inset-6 rounded-[1.35rem] border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" />

            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-6 backdrop-blur-2xl">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.38em] text-violet-100/70">
                {project.category}
              </p>
              <p className="mt-2 text-2xl font-semibold leading-none tracking-[-0.065em] text-white">
                {project.title}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
