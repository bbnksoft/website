// src/components/Feedback.tsx
import React, { useState } from "react";
import "./Feedback.css";

const Feedback: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="feedback" className="feedback-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Feedback</h2>
          <p className="section-subtitle">
            Your feedback helps us improve our products and services.
          </p>
        </div>

        <div className="feedback-card mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" required placeholder="Your name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" required placeholder="Your email" />
              </div>

              <div className="form-group">
                <label>Rating</label>
                <select required>
                  <option value="">Select rating</option>
                  <option>⭐ Excellent</option>
                  <option>👍 Good</option>
                  <option>🙂 Average</option>
                  <option>👎 Poor</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share your experience with us..."
                />
              </div>

              <button type="submit" className="feedback-btn">
                Submit Feedback
              </button>
            </form>
          ) : (
            <div className="feedback-success text-center">
              <h4>Thank you! 🙌</h4>
              <p>Your feedback has been received.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
