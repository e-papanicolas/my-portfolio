import React from "react";
import "./about.css";

export default function largeAbout() {
  return (
    <div id="about-container">
      <div id="about-color">
        <div id="about">
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
          <h2>stuff i've worked with:</h2>
          <div className="stacks">
            <div className="front-end">
              <h3>front-end</h3>
              <ul className="list">
                <li>JavaScript</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Github</li>
              </ul>
            </div>
            <div className="back-end">
              <h3>back-end</h3>
              <ul className="list">
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>Sinatra</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
          <h3>my blog</h3>
        </div>
      </div>
    </div>
  );
}
