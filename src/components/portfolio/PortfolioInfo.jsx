import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { portfolioAccents } from "@/data/portfolio";

export default function PortfolioInfo({ project }) {
  return (
    <section className="py-20 sm:py-40 bg-[#030303]">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 sm:p-8">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
              Servicios
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.services.map((service) => (
                <span
                  className="rounded-full border border-white/14 bg-white/[0.07] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/74"
                  key={service}
                >
                  {service}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 sm:p-8">
            <div
              className={`h-1 w-12 rounded-full ${portfolioAccents[project.accent]}`}
            />
            <p className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
              El reto
            </p>
            <p className="mt-4 text-base leading-7 text-white/74">
              {project.challenge}
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <div
              className={`h-1 w-12 rounded-full ${portfolioAccents[project.accent]}`}
            />
            <p className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
              La solución
            </p>
            <p className="mt-4 text-base leading-7 text-white/74">
              {project.solution}
            </p>
          </Card>

          <Card className="p-6 sm:p-8">
            <div
              className={`h-1 w-12 rounded-full ${portfolioAccents[project.accent]}`}
            />
            <p className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
              Resultados
            </p>
            <ul className="mt-4 space-y-3">
              {project.results.map((item) => (
                <li
                  className="flex items-center gap-3 text-sm text-white/74"
                  key={item}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-100/60 shadow-[0_0_18px_rgba(221,214,254,0.38)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
