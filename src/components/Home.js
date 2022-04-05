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
            typeSpeed={200}
            multiText={[
              "hi, i'm Eleni :)",
              "full stack developer",
              "plant parent 🪴",
              "traveler of the world ✈️🌎 ",
              "hi, i'm Eleni :)",
            ]}
            multiTextDelay={1500}
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
