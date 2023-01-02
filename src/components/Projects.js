import React from "react";
import "../App.css";
import ProjectCard from "./ProjectCard";
import carbonpic from "./../images/carbonpic.png";
import tweeter from "./../images/tweeter.png";
import tweetstream from "./../images/tweetstream2.png";
import spi from "./../images/spi.png";

export default function Projects() {
  const projects = [
    {
      id: 4,
      name: "SafePlace International Virtual Community",
      description:
        "The SPI Virtual Community is a web-based platform where SafePlace International’s LGBTQ+ refugees can build personal profiles, connect with other members, and safely share content. I designed and developed the back end using an MVC architecture with Node.js, Express, Sequelize and PostgreSQL. This project won first place in the Essteem Pride Month Equalithon Hackathon!",
      url: "",
      preview: spi,
      tech: ["Javascript", "Node.js", "Express", "Sequelize", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/safe-space-api",
      demo: "",
    },
    {
      id: 3,
      name: "TweetStream",
      description:
        "TweetStream is a streaming service that provides a real-time, animated stream of tweets matching your selected hashtags. I built the back end using Action Cable for web sockets, Active Storage for Rails with Cloudinary for image upload, and JWT and BCrypt for authentication and authorization. I built the front end using React, custom CSS, and the Greensock animation library.",
      url: "",
      preview: tweetstream,
      tech: [
        "Javascript",
        "React",
        "Ruby",
        "Rails",
        "WebSockets",
        "PostgreSQL",
      ],
      github: "https://github.com/e-papanicolas/tweet-front-end",
      demo: "https://www.youtube.com/watch?v=urTOZf8Z2A4",
    },
    {
      id: 1,
      name: "My Carbon Footprint",
      description:
        "My Carbon Footprint is a web app that estimates your personal carbon emissions. The app uses a React front end to capture personal details like travel history and car usage, and connects to the Carbon Interface REST API to retrieve carbon data and calculate the estimated emissions.",
      url: "",
      preview: carbonpic,
      tech: ["Javascript", "React", "Ruby", "Rails", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/my-carbon-footprint-app",
      demo: "",
    },
    {
      id: 2,
      name: "Tweeter",
      description:
        "Tweeter is an app that clones popular social media features, including following friends, viewing a personalized news feed, and exploring all posts. I used Action Cable websockets for broadcasting real-time messages in the chat feature.",
      url: "",
      preview: tweeter,
      tech: [
        "Javascript",
        "React",
        "Ruby",
        "Rails",
        "WebSockets",
        "PostgreSQL",
      ],
      github: "https://github.com/e-papanicolas/social-front-end",
      demo: "",
    },
  ];

  return (
    <div id="projects-container">
      <div>
        <h2 className="heading">projects</h2>
      </div>
      <div id="projects">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
}
