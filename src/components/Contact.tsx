// /src/components/Contact.tsx
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Section Header */}
        <div className="text-center contact-header">
          <h2 className="section-title">Let’s Build Something Remarkable</h2>
          <p className="section-subtitle">
            Tell us about your idea and we’ll help you turn it into a scalable product.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="row g-4 contact-cards">

          {/* Left Card – Contact Info */}
          <div className="col-md-5">
            <div className="contact-card info-card">
              <h4>Contact Information</h4>
              <p>
                Reach out to us anytime. Our team will respond within 24 hours.
              </p>

              <ul className="contact-info-list">
                <li>
                  <i className="bi bi-envelope-fill" />
                  <span>info@vertixsofttech.com</span>
                </li>
                <li>
                  <i className="bi bi-telephone-fill" />
                  <span>+91 9XXXXXXXXX</span>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill" />
                  <span>Hyderabad, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Card – Contact Form */}
          <div className="col-md-7">
            <div className="contact-card form-card">
              <h4 className="form-title">Start Your Project</h4>
              <p className="form-subtitle">
                Share a few details and our team will get back to you within 24 hours.
              </p>

              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Yashwanth Veeresham" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="Yashwanth@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Briefly describe your idea, requirements, or timeline"
                    required
                  />
                </div>

                <button type="submit" className="contact-btn">
                  Send Message
                </button>

                <p className="form-note">
                  🔒 Your information is safe. We never share your details.
                </p>
              </form>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
