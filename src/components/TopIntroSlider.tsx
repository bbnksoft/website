import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./TopIntroSlider.css";
import TopBgcolor from "../assets/Topbgcolor.avif";

const TopIntroSlider: React.FC = () => {
  const slides = useMemo(
    () => [
      {
        title: "Welcome to VertixSoft Technologies",
        text: "Vertixsoft Technologies is one of the leading web and mobile apps development companies...",
      },
      {
        title: "Who We Are",
        text: "A team of passionate developers, designers, and innovators crafting next-gen digital experiences.",
      },
      {
        title: "Our Goal",
        text: "We create intuitive & reliable apps and stay ahead of technology trends.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [showBody, setShowBody] = useState(false);

  /** Auto-slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  /** Delay body animation */
  useEffect(() => {
    setShowBody(false);
    const t = setTimeout(() => setShowBody(true), 400);
    return () => clearTimeout(t);
  }, [index]);

  /** Navigation handlers */
  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [slides.length]
  );

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  const goTo = useCallback((i: number) => setIndex(i), []);

  return (
    <section
      className="top-intro-slider"
      style={{
        backgroundImage: `url(${TopBgcolor})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">

        <div className="slider-content">
          <h2 className="slider-title">{slides[index].title}</h2>

          <p className={`slider-text ${showBody ? "slider-body-show" : "slider-body-hide"}`}>
            {slides[index].text}
          </p>

          <button
            className={`slider-btn ${showBody ? "slider-body-show" : "slider-body-hide"}`}
          >
            Discover More
          </button>
        </div>

        {/* Arrows */}
        <button className="slider-arrow left" onClick={prev} aria-label="Previous Slide">
          <i className="bi bi-chevron-left" />
        </button>

        <button className="slider-arrow right" onClick={next} aria-label="Next Slide">
          <i className="bi bi-chevron-right" />
        </button>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default React.memo(TopIntroSlider);
