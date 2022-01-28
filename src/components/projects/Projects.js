import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "My Carbon Footprint",
      description:
        "My Carbon Footprint was created by Eleni, Kat, and Hung to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. The data that powers the API is sourced from governments, non-profits, and leading researchers around the world including the EPAGHG Protocol andEnvironment Canada. The app is designed to create awareness by powering carbon measurement to combat climate change.",
      url: "",
      preview: "",
      tech: ["React", "Ruby", "Sinatra", "PostgreSQL"],
      github: "https://github.com/e-papanicolas/my-carbon-footprint-app",
    },
    {
      id: 2,
      name: "project2",
      description:
        "My Carbon Footprint was created by Eleni, Kat, and Hung to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. The data that powers the API is sourced from governments, non-profits, and leading researchers around the world including the EPAGHG Protocol andEnvironment Canada. The app is designed to create awareness by powering carbon measurement to combat climate change.",
      url: "",
      preview: "",
      tech: ["React", "Next.js", "Ruby", "Rails", "PostgreSQL"],
      github: "",
    },
    {
      id: 3,
      name: "project3",
      description:
        "My Carbon Footprint was created by Eleni, Kat, and Hung to give you a fun and easy way to get a snapshot of your personal carbon footprint. The app takes a look at some of the most common carbon emitting activities and provides you the ability to fill in your personal details and receive an estimate of carbon emissions based on data provided by the Carbon Interface REST API. The data that powers the API is sourced from governments, non-profits, and leading researchers around the world including the EPAGHG Protocol andEnvironment Canada. The app is designed to create awareness by powering carbon measurement to combat climate change.",
      url: "",
      preview: "",
      tech: ["React", "Ruby", "Rails", "mySQL"],
      github: "",
    },
  ];

  return (
    <div id="projects-container">
      <div id="projects-color">
        <div className="heading">
          <h2>things i've worked on</h2>
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
