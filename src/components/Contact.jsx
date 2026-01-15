import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Lucide install kiya tha na? Wahi icons hain.

const Contact = () => {
  return (
    <div className=" contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have a question or feedback? We'd love to hear from you.</p>
      </div>

      <div className="contact-content">
        {/* Left Side: Contact Form */}
        <div className="contact-form-card">
          <form>
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Sorav Singh" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="example@foodhub.com" />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="How can we help you?" rows="5"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="contact-info-wrapper">
          <div className="info-card">
            <div className="info-item">
              <div className="icon-box"><MapPin size={24} /></div>
              <div>
                <h4>Location</h4>
                <p>Chandigarh, India</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>support@foodhub.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon-box"><Phone size={24} /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="hiring-note">
            <p><strong>Note for Hiring Team:</strong> This form is a UI demonstration. In a production app, I would integrate this with EmailJS or a backend Node.js service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;