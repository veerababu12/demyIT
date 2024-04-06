import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1 className="heading">get in touch</h1>
      <div className="contact-in">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.11766393238!2d83.2934205082084!3d17.727006696362203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394326e95067c9%3A0x7a43db2618282054!2sRailway%20New%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1711004977165!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <div className="contact-form">
          <form action="https://script.google.com/macros/s/AKfycby86HDC3JMpT-Lmbt88tss1IfJTmI_NXmU3SXarVfU63-zEMZJmBFIlrbm2lhB6U-cF/exec" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-form-txt"
              required
            />
            <input
              type="tel"
              id="phone"
              name="phoneNumber"
              pattern="[0-9]{10}"
              required
              placeholder="Contact number"
              maxLength="10"
              className="contact-form-phone"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-form-email"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              className="contact-form-txtarea"
              required
            ></textarea>
            <input
              type="submit"
              value="Submit"
              name="submit"
              className="contact-form-btn"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
