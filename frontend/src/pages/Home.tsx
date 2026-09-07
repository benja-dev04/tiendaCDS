import Hero from "../components/Hero";
import CatalogGrid from "../components/CatalogGrid";
import Carousel from "../components/Carousel";
import InfoStrip from "../components/InfoStrip";
import Marquee from "../components/Marquee";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("Inicio");
  return (
    <>
      <Hero />
      <Carousel />
      <InfoStrip />
      <Marquee />
      <CatalogGrid />
    </>
  );
}

