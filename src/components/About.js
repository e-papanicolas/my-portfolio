import React from "react";
import "../App.css";

export default function About() {
  return (
    <div id="about-container">
      <h1 className="f-s-d">software engineer</h1>
      <div className="blurb">
        <h3 className="greet">
          Hi there 👋🏼 I'm Eleni, a software engineer from Washington,
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
            got to <span className="bold">collaborate with a cross-functional team</span>{" "}
          </li>
          <li>
            🍑 I am always learning as much as I can about{" "}
            <span className="bold">software engineering best practices</span>,
            software architecture and writing clean code{" "}
          </li>
          <li>
            🫐 I also like to spend time learning about{" "}
            <span className="bold">tools and products</span> that I see many
            different companies using, ex:{" "}
            <span className="bold">container platforms</span> like Docker,{" "}
            <span className="bold">cache db</span> like Redis,{" "}
            <span className="bold">testing</span> with Jest
          </li>
          <li>
            🍒 I work on small projects to{" "}
            <span className="bold">implement new concepts</span> I am learning
            about. Fun projects help me maintain motivation while also using my
            creative side
          </li>
          <li>
            🍉 I am working as a software engineer
            volunteer{" "}
            <span className="bold">
              <a
                href="https://clearviction.org/"
                target="_blank"
                rel="noreferrer"
                className="clearviction"
              >
                @ Clearviction
              </a>
            </span>
            , where I <span className="bold">build tools that help reduce barriers</span> for formerly
            incarcerated individuals. Collaborating on a team that works in an
            <span className="bold"> agile environment</span>, on a product with real users, is the hands-on and
            practical experience that felt like a natural next step!
          </li>
          <li>
            🥝 Most recently, I worked on a project{" "}
            <span className="bold">
              <a
                href="https://techfleet.org/"
                target="_blank"
                rel="noreferrer"
                className="clearviction"
              >
                @ Tech Fleet
              </a>
            </span>
            , a community led non-profit, where the client was the same non-profit I had won the hackathon project for, SafePlace International. I was the <span className="bold">development team lead building a GraphQL API</span> for the profile management feature of the virtual community for LGBTQ+ refugees who are graduates of SPI's The Dream Academy. Reconnecting with this project and cross-collaborating with design and product teams, was such a rewarding experience!
          </li>
        </ul>
      </div>
      <div className="stacks">
        <div className="stack">
          <h3>💻 My current stack:</h3>
          <ul className="list">
            <li>
              Typescript <i className="devicon-typescript-plain"></i>
            </li>
            <li>
              Javascript <i className="devicon-javascript-plain"></i>
            </li>
            <li>
              Node.js <i className="devicon-nodejs-plain"></i>
            </li>
            <li>
              Express.js <i className="devicon-express-original"></i>
            </li>
            <li>
              GraphQL <i className="devicon-graphql-plain"></i>
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
              Docker <i className="devicon-docker-plain"></i>
            </li>
            <li>
              React.js <i className="devicon-react-original"></i>
            </li>
            <li>
              Jest <i className="devicon-jest-plain"></i>
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
