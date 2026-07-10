import Link from "next/link";
import Container from "@/components/ui/Container";

export default function PortfolioNavigation({ prev, next }) {
  return (
    <section className="py-20 border-t border-white/[0.08]">
      <Container>
        <div className="flex items-center justify-between gap-6">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
                Anterior
              </p>
              <p className="mt-2 text-lg font-semibold text-white transition duration-300 group-hover:text-violet-100">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="group text-right"
            >
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
                Siguiente
              </p>
              <p className="mt-2 text-lg font-semibold text-white transition duration-300 group-hover:text-violet-100">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </section>
  );
}
