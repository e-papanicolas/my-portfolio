import React from "react";
import "../App.css";

export default function About() {
  return (
    <div id="about-container">
      <h1>full stack developer</h1>
      <div className="blurb">
        For the past sixteen years I've called various restaurants home. But in
        March 2020, restaurants closed down, and I had an unusual opportunity to
        use my free time to learn something new. I started taking coding courses
        and was totally hooked on creating cool things from scratch. After
        spending a year learning on my own and gaining a solid foundation for
        JavaScript and front end development, I enrolled at Flatiron School to
        level up my skills, where I learned to develop full stack applications.
        I recently graduated from their software engineering program and have
        been studying data structures and algorithms, while adding more new
        technologies to my stack. I am passionate about learning new things so I
        can build cool stuff that is also accessible, inclusive, dynamic and
        fun!
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
              TypeScript <i className="devicon-typescript-plain"></i>
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
              Node.js <i className="devicon-nodejs-plain"></i>
            </li>
            <li>
              Express.js <i className="devicon-express-original"></i>
            </li>
            <li>
              Ruby <i className="devicon-ruby-plain"></i>
            </li>
            <li>
              Ruby on Rails <i className="devicon-rails-plain"></i>
            </li>
            <li>Sinatra</li>
            <li>
              mongoDB <i className="devicon-mongodb-plain"></i>
            </li>
            <li>
              PostgreSQL <i className="devicon-postgresql-plain"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
