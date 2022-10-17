import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
// import { Breakpoint, BreakpointProvider } from "react-socks";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [topBtn, setTopBtn] = useState(false);
  const [bottomBtn, setBottomBtn] = useState(true);
  const [arrowColor, setArrowColor] = useState("black");

  const setBtns = useCallback(() => {
    if (window.scrollY >= window.innerHeight * 2.5) {
      setBottomBtn(false);
    } else {
      setBottomBtn(true);
    }

    if (window.scrollY <= window.innerHeight / 2) {
      setTopBtn(false);
    } else {
      setTopBtn(true);
    }
  }, [setTopBtn, setBottomBtn]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBtns();
    });
  }, [setBtns]);

  const scrollToSec = (section) => {
    if (section === "home") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setArrowColor("black");
    } else if (section === "about") {
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
      setArrowColor("white");
    } else if (section === "projects") {
      window.scrollTo({
        top: window.innerHeight * 2,
        left: 0,
        behavior: "smooth",
      });
      setArrowColor("black");
    } else if (section === "contact") {
      window.scrollTo({
        top: window.innerHeight * 3,
        left: 0,
        behavior: "smooth",
      });
      setArrowColor("white");
    }
  };

  const handleDownClick = () => {
    if (window.scrollY < window.innerHeight) {
      scrollToSec("about");
    } else if (window.scrollY < window.innerHeight * 2) {
      scrollToSec("projects");
    } else if (window.scrollY < window.innerHeight * 3) {
      scrollToSec("contact");
    }
  };

  const handleUpClick = () => {
    if (window.scrollY >= window.innerHeight * 3) {
      scrollToSec("projects");
    } else if (window.scrollY >= window.innerHeight * 2) {
      scrollToSec("about");
    } else {
      scrollToSec("home");
    }
  };

  return (
    // <BreakpointProvider>
    <div className="App">
      {/* <Breakpoint large down> */}
      <div id="scroll">
        <Home scrollToSec={scrollToSec} />
        <About />
        <Projects />
        <Contact />
        {topBtn ? (
          <FontAwesomeIcon
            id="top-button"
            style={{ color: arrowColor }}
            icon={faChevronUp}
            onClick={handleUpClick}
          />
        ) : null}
        {bottomBtn ? (
          <FontAwesomeIcon
            id="bottom-button"
            style={{ color: arrowColor }}
            icon={faChevronDown}
            onClick={handleDownClick}
          />
        ) : null}
      </div>
      {/* </Breakpoint> */}
    </div>
    // </BreakpointProvider>
  );
}

export default App;
