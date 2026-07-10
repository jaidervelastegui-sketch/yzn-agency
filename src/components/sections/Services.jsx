import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    title: "Producción Audiovisual",
    text: "Piezas con narrativa, ritmo y dirección visual pensadas para capturar atención desde el primer segundo.",
    deliverables: ["Videos de campaña", "Reels y spots", "Dirección creativa"],
    metric: "Film",
    visual: "circle",
  },
  {
    title: "Diseño Gráfico",
    text: "Sistemas visuales limpios, memorables y listos para moverse entre digital, social y campaña.",
    deliverables: ["Key visuals", "Piezas sociales", "Layouts editoriales"],
    metric: "Design",
    visual: "grid",
  },
  {
    title: "Branding",
    text: "Identidades con estrategia, voz y presencia para marcas que necesitan verse tan fuertes como su oferta.",
    deliverables: ["Identidad visual", "Guías de marca", "Dirección de tono"],
    metric: "Brand",
    visual: "mark",
  },
  {
    title: "Contenido Digital",
    text: "Contenido modular para redes, lanzamientos y experiencias que mantiene consistencia sin perder energía.",
    deliverables: ["Calendarios", "Contenido modular", "Assets para pauta"],
    metric: "Content",
    visual: "stack",
  },
];

function ServiceVisual({ type }) {
  if (type === "grid") {
    return (
      <div className="grid h-24 w-24 grid-cols-3 gap-2" data-motion-visual>
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            className="rounded-lg border border-white/10 bg-white/[0.045] transition duration-500 group-hover:bg-violet-200/12"
            key={index}
          />
        ))}
      </div>
    );
  }

  if (type === "mark") {
    return (
      <div className="relative h-24 w-24" data-motion-visual>
        <span className="absolute inset-3 rotate-45 rounded-3xl border border-violet-100/22 bg-white/[0.035]" />
        <span className="absolute inset-0 rounded-full border border-white/10" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100/70 shadow-[0_0_28px_rgba(221,214,254,0.45)]" />
      </div>
    );
  }

  if (type === "stack") {
    return (
      <div className="relative h-24 w-28" data-motion-visual>
        <span className="absolute bottom-2 left-0 h-14 w-20 rounded-2xl border border-white/10 bg-white/[0.035]" />
        <span className="absolute bottom-5 left-4 h-14 w-20 rounded-2xl border border-violet-100/18 bg-violet-200/10 backdrop-blur" />
        <span className="absolute bottom-8 left-8 h-14 w-20 rounded-2xl border border-white/14 bg-black/20 backdrop-blur" />
      </div>
    );
  }

  return (
    <div className="relative h-24 w-24 rounded-full border border-white/10 bg-white/[0.035]" data-motion-visual>
      <span className="absolute inset-4 rounded-full border border-violet-100/20" />
      <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-24deg] bg-gradient-to-r from-transparent via-white/55 to-transparent" />
      <span className="absolute right-4 top-5 h-4 w-4 rounded-full bg-violet-100/60 shadow-[0_0_26px_rgba(221,214,254,0.5)]" />
    </div>
  );
}

export default function Services() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40" data-motion-section="services" id="servicios">
      <div className="absolute left-0 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet-500/13 blur-[120px]" />
      <Container>
        <SectionTitle eyebrow="Servicios" title="Ideas con ejecución de alto impacto.">
          Combinamos estética premium, claridad estratégica y producción precisa para crear activos digitales que elevan marcas.
        </SectionTitle>

        <div className="grid gap-6 lg:grid-cols-2" data-motion-group>
          {services.map((service, index) => (
            <Card
              data-motion-item={`service-${index + 1}`}
              className="min-h-[26rem] p-0 lg:[&:nth-child(2)]:mt-14 lg:[&:nth-child(3)]:-mt-6"
              key={service.title}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 sm:p-9">
                <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-400/7 blur-[90px] transition duration-700 group-hover:bg-violet-400/24" />
                <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />

                <div className="relative flex items-start justify-between gap-6">
                  <div>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.38em] text-white/60" data-motion-text>
                      0{index + 1}
                    </span>
                    <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.34em] text-violet-100/78" data-motion-text>
                      {service.metric}
                    </p>
                  </div>
                  <ServiceVisual type={service.visual} />
                </div>

                <div className="relative mt-12 grid flex-1 gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
                  <div>
                    <h3 className="text-4xl font-semibold leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl" data-motion-title>
                      {service.title}
                    </h3>
                    <p className="mt-6 text-base leading-8 text-white/74" data-motion-text>{service.text}</p>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/[0.13] bg-black/14 p-5 backdrop-blur-2xl transition duration-500 group-hover:border-violet-100/28 group-hover:bg-black/18" data-motion-group>
                    <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-white/48">
                      Incluye
                    </p>
                    <ul className="space-y-3">
                      {service.deliverables.map((item) => (
                        <li className="flex items-center gap-3 text-sm text-white/74" key={item}>
                          <span className="h-1.5 w-1.5 rounded-full bg-violet-100/60 shadow-[0_0_18px_rgba(221,214,254,0.38)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
