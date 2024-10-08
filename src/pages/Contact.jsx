import React from 'react';
import '../App.css'; // Import the corresponding CSS
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';


const Contact = () => {
  
  return (
    <div>
    <Navbar />
  
    <section id="contact" className="content-section">
      <div className="full-width-containerCon">
        <div>
          <h1>Contact Us</h1>
          <div className="underline"></div>
        </div>
      </div>

      <section className="contact-info-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <p>CONTACT INFO</p>
                <h2><span>The Best Way</span> To Contact Us For The Help</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4">
              <div className="single-information-area text-center mb-100 wow animate__animated animate__fadeInUp" data-wow-delay="100ms">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h5>Address</h5>
                <h6>National Skill Training Institute Noida (U.P.)</h6>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="single-information-area text-center mb-100 wow animate__animated animate__fadeInUp" data-wow-delay="500ms">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h5>Phone</h5>
                <h6>############</h6>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="single-information-area text-center mb-100 wow animate__animated animate__fadeInUp" data-wow-delay="1000ms">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h5>Email</h5>
                <h6>erpUnity24agmail.com</h6>
              </div>
            </div>
          </div>
          <div className="c-border"></div>
        </div>
      </section>

      <FormSection />
      <MapSection />
    </section>
    </div>
  );
}

const FormSection = () => {
  return (
    <section className="form-section">
      <p>Contact now</p>
      <h2><span>Get In Touch</span> With Us</h2>
      <div className="container-form">
        <h2>Share some information in the form below so we can have the right sales person get back to you.</h2>
        <form>
          <div className="form-group">
            <label htmlFor="industry">What is your industry? <span>*</span></label>
            <select id="industry" name="industry" required>
              <option value="">Select your industry</option>
              <option value="industry1">Industry 1</option>
              <option value="industry2">Industry 2</option>
              <option value="industry3">Industry 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name <span>*</span></label>
            <input type="text" id="first-name" name="first-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name <span>*</span></label>
            <input type="text" id="last-name" name="last-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="business-email">Business Email <span>*</span></label>
            <input type="email" id="business-email" name="business-email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone <span>*</span></label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="job-title">Job Title <span>*</span></label>
            <input type="text" id="job-title" name="job-title" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company <span>*</span></label>
            <input type="text" id="company" name="company" required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country <span>*</span></label>
            <select id="country" name="country" required>
              <option value="">Select your country</option>
              <option value="country1">Country 1</option>
              <option value="country2">Country 2</option>
              <option value="country3">Country 3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Please share a short message about how we can help you.</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div className="form-group">
            <input type="checkbox" id="subscribe" name="subscribe" />
            <label htmlFor="subscribe" className="checkbox-label">Yes, I would like to receive email about news, products, and research from ERP Unity Solution.</label>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <div>
    <section className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.256972160563!2d77.3115001!3d28.5903482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f48ccfdc81%3A0x23b82756bfac9089!2sNational%20Skill%20Training%20Institute%20for%20Women!5e0!3m2!1sen!2sin!4v1721584925063!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
     < Footer />
     </div>
  );
 
};

export default Contact;
