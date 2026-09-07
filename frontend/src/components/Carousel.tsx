import { useState, useEffect } from "react";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Nuevos exitos del rock chileno",
    subtitle: "Prensaje limitado",
    image: "https://picsum.photos/seed/slide-jazz/1200/500",
  },
  {
    title: "Hasta 20% OFF",
    subtitle: "En discos seleccionados",
    image: "https://picsum.photos/seed/slide-rock/1200/500",
  },
  {
    title: "Contactanos en nuestras redes",
    subtitle: "Publicamos novedades y ofertas",
    image: "https://picsum.photos/seed/slide-import/1200/500",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function goTo(index: number) {
    setCurrent(index);
  }

  function goPrev() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goNext() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  return (
    <section className="mx-auto max-w-1xl px-1 pt-10">
      <div className="relative overflow-hidden rounded-md">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-64 w-full object-cover md:h-96"
              />
              <div className="absolute inset-0 bg-[var(--vinyl-black)]/50" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--amber)]">
                  {slide.subtitle}
                </p>
                <h2 className="mt-1 font-display text-3xl tracking-wide text-[var(--paper)] md:text-4xl">
                  {slide.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goPrev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[var(--vinyl-black)]/60 px-3 py-2 font-mono text-[var(--paper)] hover:bg-[var(--vinyl-black)]/90"
        >
          ‹
        </button>
        <button
          onClick={goNext}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[var(--vinyl-black)]/60 px-3 py-2 font-mono text-[var(--paper)] hover:bg-[var(--vinyl-black)]/90"
        >
          ›
        </button>

        <div className="absolute bottom-4 right-6 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Ir a slide ${index + 1}`}
              className="h-2 w-2 rounded-full transition-colors"
              style={{
                backgroundColor:
                  index === current ? "var(--amber)" : "var(--grey)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

