// Footer.optimized.tsx
import React, { useCallback } from "react";
import "./Footer.css";
import logo from "../assets/FullLogo.png";

const Footer: React.FC = () => {
  const scrollTo = useCallback((e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <footer className="site-footer pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          {/* Brand & Contact */}
          <div className="col-12 col-md-4">
            <div className="footer-brand mb-3 d-flex align-items-center">
              <img
                src={logo}
                alt="VertixSoft logo"
                className="footer-logo me-2"
              />
            </div>

            <p className="footer-about">
              We build beautiful mobile apps, games, and navigation tools —
              focused on UX, performance, and long-term support.
            </p>

            <ul className="list-unstyled contact-list mt-3">
              <li>
                <i className="bi bi-geo-alt-fill me-2" />
                Hyderabad, India
              </li>

              {/* ✅ FIXED EMAIL */}
              <li>
                <i className="bi bi-envelope-fill me-2" />
                <a
                  href="mailto:info@vertixsofttech.in"
                  className="footer-email"
                >
                  info@vertixsofttech.in
                </a>
              </li>

              <li>
                <i className="bi bi-telephone-fill me-2" />
                <a href="tel:+919000000000">+91 90000 00000</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#home" onClick={(e) => scrollTo(e, "top")}>Home</a></li>
              <li><a href="#about" onClick={(e) => scrollTo(e, "#about")}>About Us</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, "#services")}>Services</a></li>
              <li><a href="#portfolio" onClick={(e) => scrollTo(e, "#portfolio")}>Portfolio</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, "#contact")}>Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3">
            <h6 className="footer-heading">Services</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#services" onClick={(e) => scrollTo(e, "#services")}>Mobile App Development</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, "#services")}>Game Development</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, "#services")}>UI / UX Design</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, "#services")}>Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-12 col-md-3">
            <h6 className="footer-heading">Follow Us</h6>
            <p className="footer-text">
              Stay connected — follow us for updates, case studies and product news.
            </p>
            <div className="social-icons d-flex gap-2 mt-2">
              <a className="social-btn" href="#" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
              <a className="social-btn" href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a className="social-btn" href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider my-4" />

        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center text-center gap-2">
            <div className="footer-bottom-text">
              © {new Date().getFullYear()} VertixSoft Technologies — All rights reserved.
            </div>
            <div className="footer-legal d-flex gap-3">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
