import Container from "@/components/ui/Container";

export default function PortfolioGallery({ project }) {
  return (
    <section className="py-20 sm:py-40 bg-[#030303]">
      <Container>
        <p className="mb-10 text-[0.68rem] font-bold uppercase tracking-[0.5em] text-violet-100/68">
          Galería
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div
            className={`aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/[0.12] ${project.visual} ${project.panel}`}
          >
            <div className="flex h-full items-end p-6">
              <div className="rounded-2xl border border-white/12 bg-black/28 px-5 py-3 backdrop-blur-2xl">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
                  Imagen 01
                </p>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.04]">
            <div className="flex h-full items-end p-6">
              <div className="rounded-2xl border border-white/12 bg-black/28 px-5 py-3 backdrop-blur-2xl">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
                  Imagen 02
                </p>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.03] md:col-span-2 md:aspect-[16/7]">
            <div className="flex h-full items-end p-6">
              <div className="rounded-2xl border border-white/12 bg-black/28 px-5 py-3 backdrop-blur-2xl">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
                  Imagen 03
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
