import React, { memo, useMemo } from "react";
import "./Testimonials.css";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

const TestimonialCard = memo(({ t }: { t: Testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial-quote-icon">
      <i className="bi bi-chat-quote-fill" />
    </div>

    <p className="testimonial-quote">“{t.quote}”</p>

    <div className="testimonial-footer">
      <div className="testimonial-avatar">
        {t.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <div className="testimonial-name">{t.name}</div>
        <div className="testimonial-role">
          {t.role}, {t.company}
        </div>
      </div>
    </div>
  </div>
));

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const items = useMemo(
    () =>
      testimonials.map((t, i) => (
        <div key={i} className="col-12 col-md-6 col-lg-4">
          <TestimonialCard t={t} />
        </div>
      )),
    [testimonials]
  );

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="section-title">What Our Clients Say</h2>
          <h3 className="testimonials-title"></h3>
          <p className="testimonials-subtitle">
            We partner with startups and growing businesses to design & build reliable digital products.
          </p>
        </div>

        <div className="row g-4 justify-content-center">{items}</div>
      </div>
    </section>
  );
};

export default memo(Testimonials);
