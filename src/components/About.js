import React from "react";
import "../App.css";

export default function About() {
  return (
    <div id="about-container">
      <h1>full stack developer</h1>
      <div className="blurb">
        For the past sixteen years I've called various restaurants home. When
        the pandemic hit, and restaurants closed down, I had an unusual
        opportunity to use my free time to learn something new. I started taking
        coding courses and was totally hooked on creating cool stuff from
        scratch. After spending almost a year learning front end languages on my
        own, I enrolled at Flatiron School to level up my skills and learn the
        full stack. I recently graduated from the software engineering program
        and am looking for my first full-time developement position. I love
        learning new things so I can build stuff that is accessible, inclusive,
        dynamic and fun!
      </div>
      <div className="stacks">
        <div className="front-end">
          <h3>front-end</h3>
          <ul className="list">
            <li>
              JavaScript <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              React.js <i className="devicon-react-original"></i>
            </li>
            <li>
              HTML <i className="devicon-html5-plain"></i>
            </li>
            <li>
              CSS <i className="devicon-css3-plain"></i>
            </li>
          </ul>
        </div>
        <div>
          <p className="and">&</p>
        </div>
        <div className="back-end">
          <h3>back-end</h3>
          <ul className="list">
            <li>
              Ruby <i className="devicon-ruby-plain"></i>
            </li>
            <li>
              Ruby on Rails <i className="devicon-rails-plain"></i>
            </li>
            <li>Sinatra</li>
            <li>
              PostgreSQL <i className="devicon-postgresql-plain"></i>
            </li>
          </ul>
        </div>
        <div className="horizontal">
          <h3 className="new-tech">
            i'm currently adding new things to my stack:{" "}
          </h3>
          <ul>
            <li>
              TypeScript <i className="devicon-typescript-plain"></i>
            </li>
            <li>
              Node.js <i className="devicon-nodejs-plain"></i>
            </li>
            <li>
              Express.js <i className="devicon-express-original"></i>
            </li>
            <li>
              mongoDB <i className="devicon-mongodb-plain"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
