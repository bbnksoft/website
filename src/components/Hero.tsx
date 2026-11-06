import React from "react";
import "./Hero.css";
import MocImage from "../assets/Moc.webp";

const Hero: React.FC = () => {
  return (
    <section className="hero-section py-6">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <h1 className="display-5 fw-bold">
              Empowering Your Business with Innovative Solutions <br/>
              We build beautiful web & mobile applications.
            </h1>

            <p className="lead text-muted hero-paragraph-black">
              Custom apps, game design, UI/UX and cloud-ready solutions — built fast with flawless UX.
            </p>

            <a href="#contact" className="btn btn-primary btn-lg mt-3">Start a Project</a>

            <ul className="list-inline mt-4 text-muted small paragraph-black">
              <li className="list-inline-item">✓ Payment Integration</li>
              <li className="list-inline-item">✓ App Store Publishing</li>
              <li className="list-inline-item">✓ Analytics & Maintenance</li>
            </ul>
          </div>

          <div className="col-md-6 text-center">
            <img
              src={MocImage}
              alt="App Preview"
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
