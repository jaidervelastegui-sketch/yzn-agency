import { notFound } from "next/navigation";
import { LenisController, MotionController } from "@/components/animations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  getPortfolioProjects,
  getPortfolioProjectBySlug,
  getAdjacentPortfolioProjects,
} from "@/data/portfolio";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioNavigation from "@/components/portfolio/PortfolioNavigation";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export async function generateStaticParams() {
  return getPortfolioProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | YZN`,
    description: project.description,
    openGraph: {
      title: `${project.title} | YZN`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function PortfolioPage({ params }) {
  const { slug } = await params;
  const project = getPortfolioProjectBySlug(slug);

  if (!project) notFound();

  const adjacent = getAdjacentPortfolioProjects(slug);

  return (
    <>
      <LenisController />
      <MotionController />
      <Navbar />
      <main>
        <PortfolioHero project={project} />
        <PortfolioInfo project={project} />
        <PortfolioGallery project={project} />
        <PortfolioNavigation prev={adjacent.prev} next={adjacent.next} />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
