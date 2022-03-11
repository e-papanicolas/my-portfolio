import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <div id="contact-container">
      <h2 className="heading">let's connect!</h2>
      <div>
        <p>I am always looking to connect with new people.</p>
        <p>Sharing ideas turns possibilities into realities. </p>
      </div>

      <div className="social-media">
        <div className="links">
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
          <a id="four" className="social" href="https://dev.to/e_papanicolas">
            <i className="fab fa-dev fa-5x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
