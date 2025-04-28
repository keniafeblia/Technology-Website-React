import React from 'react';
import '../styles/JoinUs.css'; // Pastikan path CSS sudah benar
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const JoinUs = () => {
  return (
    <div className="join-us-container">
      {/* Hero Section */}
      <header className="hero-section join-us-hero">
        <div className="hero-content">
          <h1>Join Our Mission at AstraSpace</h1>
          <p>We're looking for passionate individuals to join our team and push the boundaries of space technology.</p>
          <div className="cta-buttons">
          <Link to="/apply" className="cta-button">Apply Now</Link>
            <a href="#contact" className="cta-button">Contact Us</a>
          </div>
        </div>
      </header>

      <section className="join-us-steps">
        <h2>How to Join AstreviX</h2>
        {/* Steps to Join Us */}
        <div className="step">
          <h2>Step 1: Apply Online</h2>
          <p>Fill out our online application form and share your resume with us.</p>
        </div>
        <div className="step">
          <h2>Step 2: Interview</h2>
          <p>We’ll schedule an interview to discuss your skills, experience, and passion for aerospace.</p>
        </div>
        <div className="step">
          <h2>Step 3: Join the Team</h2>
          <p>If selected, you'll be part of an amazing team that's shaping the future of space exploration.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="join-us-contact" id='contact'>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Feel free to reach out with any questions or inquiries about the application process.</p>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:careers@astrevix.com">careers@astrevix.com</a></p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Location:</strong> AstraSpace HQ, Orbit IX Complex, LEO Zone, Indonesia</p>
        </div>

        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://www.facebook.com/astravix" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.twitter.com/astravix" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://www.linkedin.com/company/astravix" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/astravix" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </section>

      {/* Embed Google Maps */}
      <div className="maps">
        <h3>Our Location</h3>
        <div className="map-container">
          <iframe
            title="AstraSpace Location"
            width="100%"
            height="300"
            src="https://www.google.com/maps?q=AstraSpace%20HQ,%20Orbit%20IX%20Complex,%20LEO%20Zone,%20Indonesia&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>


      <footer className="footer">
        <p>For more details, contact us at: <a href="mailto:careers@astrevix.com">careers@astrevix.com</a></p>
      </footer>
    </div>
  );
};

export default JoinUs;
