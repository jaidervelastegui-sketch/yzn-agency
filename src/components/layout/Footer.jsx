import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030303] py-10" data-motion-section="footer">
      <Container className="flex flex-col gap-5 text-xs uppercase tracking-[0.24em] text-white/38 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-black tracking-[0.42em] text-white" data-motion-item>YZN</p>
        <p data-motion-item>Dirección creativa · Branding · Contenido digital</p>
        <p data-motion-item>© 2026</p>
      </Container>
    </footer>
  );
}
