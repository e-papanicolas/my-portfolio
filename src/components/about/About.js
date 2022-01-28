import React from "react";
import "./about.css";

export default function About() {
  return (
    <div id="about-container">
      <div id="about-color">
        <div id="about">
          <h2>full stack developer</h2>
          <div className="blurb">
            For the past 16 years Eleni called various restaurants home. When
            the pandemic hit, and restaurants closed down, she had an unusual
            opportunity to use her newfound free time to learn something new.
            She started taking coding courses and was totally hooked on creating
            cool stuff from scratch. It was then that she decided that this was
            something she wanted to pursue full time. Eleni is currently a
            software engineering student at Flatiron School and she likes
            building things that are accessible, inclusive, responsive and
            dynamic.
          </div>
          <div className="stacks">
            <div className="front-end">
              <h3>front-end</h3>
              <ul className="list">
                <li>
                  JavaScript <i class="fab fa-js-square"></i>
                </li>
                <li>
                  React.js <i class="fab fa-react"></i>
                </li>
                <li>
                  HTML <i class="fab fa-html5"></i>
                </li>
                <li>
                  CSS <i class="fab fa-css3-alt"></i>
                </li>
              </ul>
            </div>
            <div className="back-end">
              <h3>back-end</h3>
              <ul className="list">
                <li>
                  Ruby <i class="fas fa-gem"></i>
                </li>
                <li>
                  Ruby on Rails <i class="far fa-gem"></i>
                </li>
                <li>Sinatra</li>
                <li>
                  SQL <i class="fas fa-database"></i>
                </li>
                <li>
                  PostgreSQL <i class="fas fa-database"></i>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a className="blog" href="https://dev.to/e_papanicolas">
              <i className="fab fa-dev fa-5x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
