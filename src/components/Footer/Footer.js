import React from 'react';

function Footer({ contactInfo, usefulLinks, subscription }) {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {usefulLinks.map((links, index) => (
              <div key={index} className="col-lg-3 col-md-6 footer-links">
                <h4>{links.title}</h4>
                <ul>
                  {links.links.map((link, idx) => (
                    <li key={idx}>
                      <i className="ion-ios-arrow-forward"></i> <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-lg-3 col-md-6 footer-contact" style={{ fontSize: '1.5rem' }}>
              <h4>Contact Us</h4>
              <p>
                {contactInfo.address}<br />
                {contactInfo.city}, {contactInfo.state}<br />
                {contactInfo.country} <br />
                <strong>Phone:</strong> {contactInfo.phone}<br />
                <strong>Email:</strong> {contactInfo.email}<br />
              </p>

              <div className="social-links">
                {contactInfo.social.map((link, idx) => (
                  <a key={idx} href={link.url}><i className={`ion-logo-${link.icon}`}></i></a>
                ))}
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Subscription</h4>
              <p>{subscription.text}</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 copyright" style={{ color: '#fff', fontSize: '1.3rem' }}>
            {subscription.copyright}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
