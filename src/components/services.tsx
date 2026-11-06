import React, { memo } from "react";
import "./services.css";

type Service = { title: string; desc: string; icon: string };

const services: Service[] = [
  {
    title: "Mobile App Development",
    desc: "We design and develop high-performance Android and iOS applications focused on usability, scalability, and long-term business growth.",
    icon: "phone",
  },
  {
    title: "Game Development",
    desc: "From concept to launch, we create engaging 2D & 3D games with smooth performance, immersive gameplay, and modern design standards.",
    icon: "controller",
  },
  {
    title: "UI / UX Design",
    desc: "We craft intuitive user experiences and clean interfaces that improve user engagement, retention, and conversion rates.",
    icon: "palette",
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable post-launch support including updates, performance optimization, bug fixes, and continuous product improvements.",
    icon: "gear",
  },
];

const ServiceCard = memo(({ s }: { s: Service }) => (
  <div className="service-card">
    <i className={`bi bi-${s.icon} service-icon`} aria-hidden="true" />
    <h5 className="service-title">{s.title}</h5>
    <p className="service-desc">{s.desc}</p>
  </div>
));

const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container text-center">
        <h2 className="section-title">What We Build</h2>

        <h1 className="fw-bold" style={{ fontSize: "1.5rem" }}>
          Driving Business Growth Through Technology
        </h1>

        <div className="row g-4 mt-4">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <ServiceCard s={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Services);
