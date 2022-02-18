import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";
import carbonpic from "../../images/carbonpic.png";
import tweeter from "../../images/tweeter.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "My Carbon Footprint",
      description:
        "My Carbon Footprint takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. The data that powers the API is sourced from governments, non-profits, and leading researchers around the world including the EPAGHG Protocol and Environment Canada. The app is designed to create awareness by powering carbon measurement to combat climate change.",
      url: "",
      preview: carbonpic,
      tech: ["React", "Ruby", "Sinatra", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/my-carbon-footprint-app",
    },
    {
      id: 2,
      name: "Tweeter",
      description:
        "Tweeter is a social media clone that uses Action Cable websockets for real-time chats.",
      url: "",
      preview: tweeter,
      tech: ["React", "Ruby", "Rails", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/social-front-end",
    },
    {
      id: 3,
      name: "project3",
      description:
        "An app where you can follow a twitter hashtag and stream the tweets in real-time and share with friends.",
      url: "",
      preview: "",
      tech: ["React", "Ruby", "Rails", "mySQL"],
      github: "https://github.com/e-papanicolas/tweet-front-end",
    },
  ];

  return (
    <div id="projects-container">
      <div id="projects-color">
        <div>
          <h2 className="heading">things i've worked on</h2>
        </div>
        <div id="projects">
          {projects.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
