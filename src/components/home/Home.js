import React from "react";
import "./home.css";

export default function Home({ scrollToSec }) {
  return (
    <div id="home-container">
      <div className="App-home">
        <div className="me">
          <h1>{"hi, i'm eleni :)"}</h1>
        </div>
        <div className="link-container">
          <div className="home-link about" onClick={() => scrollToSec("about")}>
            <h1>About</h1>
          </div>
          <div className="home-link" onClick={() => scrollToSec("projects")}>
            <h1>Projects</h1>
          </div>

          <div className="home-link" onClick={() => scrollToSec("contact")}>
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
