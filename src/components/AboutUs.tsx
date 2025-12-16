import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Heading */}
        <h2 className="about-heading">The VertixSoft Story</h2>
        <p className="about-tagline text-center"> We build scalable digital products that help startups grow faster. </p>

        {/* Top intro */}
        <p className="about-top-text justify-text-left">
          Welcome to VertixSoft Technologies. VertixSoft is a leading mobile and
          software development company delivering innovative digital solutions
          across multiple domains. We specialize in building high-performance
          mobile applications, navigation tools, and scalable software platforms.
          With a growing global user base, we help businesses transform ideas
          into impactful digital products.
        </p>

        {/* Content Grid */}
        <div className="row about-grid">
          {/* Left */}
          <div className="col-md-6">
            <p className="about-text">
              We are a team of passionate developers and technology professionals
              committed to delivering high-quality, reliable, and future-ready
              software solutions for businesses and individuals.
            </p>

            <ul className="about-list">
              <li>
                <i className="bi bi-check2-circle" />
                Our mission is to make technology accessible, efficient, and
                user-friendly for organizations of all sizes.
              </li>
              <li>
                <i className="bi bi-check2-circle" />
                We develop mobile applications and software solutions that are
                intuitive, scalable, and performance-driven.
              </li>
              <li>
                <i className="bi bi-check2-circle" />
                We follow industry best practices to ensure secure, reliable,
                and maintainable systems.
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="col-md-6">
            <p className="about-text">
              Our team is dedicated to providing exceptional customer support
              and long-term technical partnership. We believe technology should
              empower businesses, and we work closely with our clients to help
              them harness its full potential to achieve sustainable growth.
            </p>

            <a href="#contact" className="about-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(AboutUs);
