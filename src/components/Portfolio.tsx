import React, { memo } from "react";
import "./Portfolio.css";

import EarthImg from "../assets/Earth.png";
import WeatherImg from "../assets/Weather.png";
import MapsImg from "../assets/Maps.png";

type Project = {
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Live Satellite Maps",
    category: "Navigation",
    image: EarthImg,
  },
  {
    title: "Weather Radar Platform",
    category: "Weather",
    image: WeatherImg,
  },
  {
    title: "GPS Route Tracker",
    category: "Maps",
    image: MapsImg,
  },
];

const PortfolioCard = memo(({ p }: { p: Project }) => (
  <div className="portfolio-card">
    <div className="portfolio-image-wrapper">
      {/* ❌ badge removed */}
      <img
        src={p.image}
        alt={p.title}
        className="portfolio-image"
        loading="lazy"
      />
    </div>

    <div className="portfolio-content">
      <h5 className="portfolio-title">{p.title}</h5>

      {/* ✅ category used as button name */}
      <a href="#contact" className="portfolio-btn">
        {p.category}
      </a>
    </div>
  </div>
));

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="portfolio-main-title">Products We’ve Shipped</h2>
          <p className="portfolio-subtitle">
            Showcase of mobile apps and experiences we built.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <PortfolioCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Portfolio);
