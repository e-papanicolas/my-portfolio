import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div id="contact-container">
      <div id="contact-color">
        <div id="contact">
          <div className="connect">
            <h2 className="title">let's connect!</h2>
            <p>I am always looking to connect with new people.</p>
            <p>Sharing ideas turns possibilities into realities. </p>
          </div>

          <div className="social-media">
            <div class Name="links">
              <a
                id="one"
                className="social"
                href="mailto:elenipapanicolas@gmail.com?subject=Let's Connect!"
              >
                <i className="far fa-envelope fa-5x"></i>
              </a>
              <a
                id="two"
                className="social"
                href="https://github.com/e-papanicolas"
              >
                <i className="fab fa-github-square fa-5x"></i>
              </a>
              <a
                id="three"
                className="social"
                href="https://www.linkedin.com/in/elenipapanicolas/"
              >
                <i className="fab fa-linkedin fa-5x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
