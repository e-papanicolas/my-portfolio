import React from "react";
import "../App.css";
import TypeWriterEffect from "react-typewriter-effect";

export default function Home({ scrollToSec }) {
  return (
    <div id="home-container">
      <div className="App-home">
        <div className="me">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Source Code Pro" }}
            startDelay={100}
            cursorColor="black"
            typeSpeed={100}
            text="hi, i'm Eleni :)"
          />
        </div>
        <div className="link-container">
          <div className="home-link about" onClick={() => scrollToSec("about")}>
            <h4>About</h4>
          </div>
          <div className="home-link" onClick={() => scrollToSec("projects")}>
            <h4>Projects</h4>
          </div>

          <div className="home-link" onClick={() => scrollToSec("contact")}>
            <h4>Contact</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
