import React from "react";
import "./projects.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <a href={project.url}>
        <img src={project.preview} alt={project.name} />
      </a>
      <div className="links">
        <h3>{project.name}</h3>

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
