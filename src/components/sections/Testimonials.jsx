import Container from "@/components/ui/Container";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40" data-motion-section="testimonials" id="testimonios">
      <Container>
        <div className="grid gap-10 border-y border-white/[0.08] py-16 lg:grid-cols-[0.34fr_1fr] lg:py-24" data-motion-group>
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.5em] text-violet-100/68" data-motion-text>
              Clientes
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-violet-500/9 blur-[90px]" />
            <p className="relative max-w-5xl text-4xl font-semibold leading-[1.06] tracking-[-0.06em] text-white sm:text-6xl lg:text-[4.75rem]" data-motion-title>
              &ldquo;YZN superó nuestras expectativas. Su creatividad y profesionalismo marcaron la diferencia.&rdquo;
            </p>
            <div className="relative mt-10 flex items-center gap-4">
              <div className="h-px w-14 bg-violet-100/50" />
              <p className="text-xs font-bold uppercase tracking-[0.36em] text-white/52" data-motion-text>
                Cliente YZN
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
