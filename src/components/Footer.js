import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon logo" aria-label="Little Lemon logo" />
          <p>
            Little Lemon is owned by two Italian brothers, Alessandro and
            Giuseppe. They relocated to the United States with the aim of
            fulfilling their joint aspiration of owning a dining establishment.
          </p>
          <div className="footer-content">
            <div className="locations">
              <h5>LOCATIONS</h5>
              <ul>
                <li>Albany Park</li>
                <li>Riverdale</li>
                <li>Edgewater</li>
                <li>Westridge</li>
              </ul>
            </div>
            <div className="opening-times">
              <h5>OPENING TIMES</h5>
              <ul>
                <li>Mon - Fri: 10:00 AM - 09:00 PM</li>
                <li>Sat - Sun: 11:00 AM - 11:00 PM</li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>4053 W Gladys Ave</li>
                <li>Chicago, Illinois(IL), 60624</li>
                <li>Email: littlelemon@monmail.fr.nf</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
