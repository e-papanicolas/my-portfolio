import React from "react";
import "../App.css";

export default function About() {
  return (
    <div id="about-container">
      <h1 className="f-s-d">full stack developer</h1>
      <div className="blurb">
        <h3 className="greet">
          Hi there 👋🏼 I'm Eleni! Full stack software engineer from Washington,
          DC (by way of Los Angeles ☀️ and New Jersey). Follow along on my
          journey from restaurants to tech 🚀{" "}
        </h3>
        <ul className="activities-list">
          <li>
            🍓 I spent a year <span className="bold">self-teaching</span>{" "}
            Javascript and{" "}
            <span className="bold">programming fundamentals.</span>{" "}
          </li>
          <li>
            🍋 Then I attended Flatiron's{" "}
            <span className="bold">full stack bootcamp</span>, where I learned
            to understand how everything works together on a higher level - I
            also created my own really fun full stack app
          </li>
          <li>
            🍇 I wrote the back end for a{" "}
            <span className="bold">hackathon-winning application</span>, where I
            got to <span className="bold">collaborate with a team</span> and see
            the development lifecycle in action{" "}
          </li>
          <li>
            🍑 Right now I'm learning about{" "}
            <span className="bold">software engineering best practices</span>,
            software architecture and writing clean code.{" "}
          </li>
          <li>
            🫐 I also like to spend time learning about{" "}
            <span className="bold">tools and products</span> that I see lots of
            different companies using, ex:{" "}
            <span className="bold">container platforms</span> like Docker,{" "}
            <span className="bold">cache db</span> like Redis,{" "}
            <span className="bold">testing</span> with Jest.
          </li>
          <li>
            🍏 I do a bit of data structures and algorithms daily to flex those
            <span className="bold"> problem-solving muscles</span>
          </li>
          <li>
            🍒 I work on small projects to{" "}
            <span className="bold">implement new concepts</span> I am learning
            about, currently object oriented design in Typescript. Fun projects
            help me maintain motivation while also using my creative side.
          </li>
        </ul>
      </div>
      <div className="stacks">
        <div className="stack">
          <h3>💻 My current stack:</h3>
          <ul className="list">
            <li>
              JavaScript <i className="devicon-javascript-plain"></i>
            </li>
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
              PostgreSQL <i className="devicon-postgresql-plain"></i>
            </li>
          </ul>
        </div>
        <div className="stack">
          <h3>Bonus points 💭</h3>
          <ul className="list">
            <li>
              React.js <i className="devicon-react-original"></i>
            </li>
            <li>
              Ruby <i className="devicon-ruby-plain"></i>
            </li>
            <li>
              Ruby on Rails <i className="devicon-rails-plain"></i>
            </li>
            <li>
              mongoDB <i className="devicon-mongodb-plain"></i>
            </li>
            <li>
              HTML <i className="devicon-html5-plain"></i>
            </li>
            <li>
              CSS <i className="devicon-css3-plain"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
