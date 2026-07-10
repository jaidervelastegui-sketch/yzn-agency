import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function PortfolioCTA() {
  return (
    <section className="py-20 sm:py-40 bg-[#030303]">
      <Container>
        <div className="rounded-[2rem] border border-white/[0.14] bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05)_48%,rgba(0,0,0,0.06))] p-10 sm:p-16 text-center shadow-[0_28px_110px_rgba(0,0,0,0.36)] backdrop-blur-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold leading-[1.06] tracking-[-0.06em] text-white">
            ¿Listo para crear algo igual de impactante?
          </h2>
          <Button className="mt-10" href="/#contacto">
            Solicitar propuesta
          </Button>
        </div>
      </Container>
    </section>
  );
}
