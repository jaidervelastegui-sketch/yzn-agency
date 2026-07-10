import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const inputClasses =
  "w-full rounded-[1.25rem] border border-white/14 bg-white/[0.07] px-5 py-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] outline-none transition duration-300 placeholder:text-white/34 focus:border-violet-200/45 focus:bg-white/[0.09] focus:shadow-[0_0_48px_rgba(168,85,247,0.2)]";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40" data-motion-section="contact" id="contacto">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[32rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-500/9 blur-[130px]" />
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-start" data-motion-group>
          <div className="lg:sticky lg:top-32">
            <SectionTitle eyebrow="Contacto" title="Hagamos que tu marca se sienta imposible de ignorar.">
              Cuéntanos qué estás construyendo y diseñamos el siguiente movimiento visual de tu proyecto.
            </SectionTitle>
          </div>

          <form className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05)_46%,rgba(0,0,0,0.08))] p-5 shadow-[0_28px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:p-8 lg:p-10" data-motion-item>
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-400/16 blur-[90px]" />
            <div className="relative grid gap-5 sm:grid-cols-2" data-motion-group>
              <label className="block">
                <span className="mb-3 block text-[0.66rem] font-bold uppercase tracking-[0.3em] text-white/56" data-motion-text>
                  Nombre
                </span>
                <input
                  className={inputClasses}
                  name="name"
                  placeholder="Tu nombre"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="mb-3 block text-[0.66rem] font-bold uppercase tracking-[0.3em] text-white/56" data-motion-text>
                  Correo
                </span>
                <input
                  className={inputClasses}
                  name="email"
                  placeholder="hola@marca.com"
                  type="email"
                />
              </label>
            </div>

            <label className="relative mt-6 block">
              <span className="mb-3 block text-[0.66rem] font-bold uppercase tracking-[0.3em] text-white/56" data-motion-text>
                Mensaje
              </span>
              <textarea
                className={`${inputClasses} min-h-48 resize-none`}
                name="message"
                placeholder="Cuéntanos sobre tu proyecto"
              />
            </label>

            <div className="relative mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-sm leading-6 text-white/55" data-motion-text>
                Te responderemos con una propuesta clara y visual, sin compromiso.
              </p>
              <Button className="w-full sm:w-auto" type="submit">
                Solicitar propuesta
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
