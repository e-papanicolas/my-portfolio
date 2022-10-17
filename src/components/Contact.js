import React from "react";
import "../App.css";

export default function Contact() {
  return (
    <div id="contact-container">
      <h2 className="heading">let's connect!</h2>
      <div className="contact-text">
        <p className="bold">I am always looking to connect with new people.</p>
        <p className="bold">
          Sharing ideas turns possibilities into realities.{" "}
        </p>

        <p>
          In my next position, I am looking for the right match for my
          development experience, commitment to learning, and passionate nature.
          My experience in restaurant management has helped me develop strong
          communication and team collaboration skills.
        </p>
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
