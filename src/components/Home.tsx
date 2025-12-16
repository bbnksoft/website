import React, { memo } from "react";
import "./Home.css";

import Hero from "./Hero";
import Services from "./services";
import AboutUs from "./AboutUs";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home: React.FC = () => {
  return (
    <div className="home-page">

      <section className="home-hero">
        <Hero />
      </section>

      <section className="home-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Mobile app development, UI/UX design, cloud integration.
          </p>
        </div>
        <Services />
      </section>

      <section className="home-section bg-light">
        <AboutUs />
      </section>

      <section className="home-section portfolio-section">
        <Portfolio />
      </section>

      <section className="home-cta">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Build Your App?</h2>
          <p className="cta-text">Let’s create a modern digital experience.</p>
          <a href="#contact" className="btn btn-lg cta-btn">Get in Touch</a>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default memo(Home);
