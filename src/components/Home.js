import React from "react";
import "../App.css";
import { gsap } from "gsap";

export default function Home({ scrollToSec }) {
  const onMouseEnterLetter = ({ currentTarget }) => {
    gsap.to(currentTarget, { y: 100, duration: 1 });
  };

  const onMouseLeaveLetter = ({ currentTarget }) => {
    gsap.to(currentTarget, { y: 0, duration: 1 });
  };

  return (
    <div id="home-container">
      <div className="App-home">
        <div className="me">
          <h1>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              h
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              i
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              ,
            </span>{" "}
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              i
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              '
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              m
            </span>{" "}
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              e
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              l
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              e
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              n
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              i
            </span>{" "}
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              :
            </span>
            <span
              onMouseEnter={onMouseEnterLetter}
              onMouseLeave={onMouseLeaveLetter}
            >
              )
            </span>
          </h1>
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
