import React from "react"
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import "./Contact.css"

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-bento">
        <div className="contact-left">
          <img src="/logo2.png" alt="Company Logo" className="contact-logo" />
          <div className="contact-actions">
            <a href="tel:+1234567890" className="contact-action-btn" title="Call Us">
              <FaPhoneAlt />
            </a>
            <a href="mailto:info@investmentapp.com" className="contact-action-btn" title="Email Us">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <form className="contact-form">
          <h2>Feedback / Contact Us</h2>
          <label>
            Name
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
          <label>
            Concern
            <input type="text" name="concern" placeholder="Subject or Concern" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Your message or feedback..." rows={5} required />
          </label>
          <button type="submit" className="contact-submit-btn">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact