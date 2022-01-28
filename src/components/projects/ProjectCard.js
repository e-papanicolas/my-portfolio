import React from "react";
import "./projects.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <image src={project.preview} alt={project.name} />
      <div className="links">
        <a className="title" href={project.url}>
          <h3>{project.name}</h3>
        </a>
        <a href={project.github}>
          <i
            className="fab fa-github-square fa-2x"
            style={{ color: "black" }}
          ></i>
        </a>
      </div>
      <p>{project.description}</p>
      <ul className="tech-list">
        {project.tech.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}
