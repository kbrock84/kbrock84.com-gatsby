import React, { useState, useEffect } from "react";
import styled from "styled-components";
import posed from "react-pose";
import Typist from "react-typist";
import GithubImage from "../components/GithubImage";
import TwitterImage from "../components/TwitterImage";
import PopIn from "../Animations/PopIn";
import ExpandOnHover from "../Animations/ExpandOnHover";

const EnterTop = posed.div({
  enter: {
    x: 0,
    opacity: 0.9,
    transition: {
      default: { ease: "easeIn", duration: 350 },
      opacity: { duration: 450 }
    }
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: { ease: "linear" }
  }
});

const AboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #080808;
  color: #ff00ee;
  padding-top: 100px;
  padding-left: 50px;
`;

const IntroText = () => {
  return (
    <div style={{ width: "100%", paddingRight: "32px", maxWidth: "650px" }}>
      <Typist avgTypingDelay={10}>
        <code style={{ color: "#00CCCC" }}>
          Hi!, <Typist.Delay ms={300} />
          I'm Kevin.
          <Typist.Delay ms={400} />
          <br />
          <br />
          I'm a husband, father and passionate developer.
          <br />
          <br />
          <Typist.Delay ms={100} />
          I build websites, web applications and business focused software
          utilities.
          <br />
          <br />
          <Typist.Delay ms={200} /> I've experienced several different
          programming languages and technologies since I started this journey in
          2007, but fell in love with the web development community and gained
          an appreciation for open source that drives me to publish things like
          this website publicly.
          <br />
          <br />
          <Typist.Delay ms={400} />
          Please join me by submitting any issues to this website or other repos
          I have on GitHub, or sending me a tweet or DM @kbrock84 (links above).
        </code>
      </Typist>
    </div>
  );
};

const About = () => {
  const [isTitleVisible, setTitleVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTitleVisibility(true);
    }, 200);
  });
  return (
    <AboutWrapper>
      <EnterTop
        pose={isTitleVisible ? "enter" : "exit"}
        style={{
          display: "inline-block",
          width: "250px"
        }}
      >
        <h1 style={{ display: "block", width: "250px" }}>Kevin Brock</h1>
      </EnterTop>
      <span style={{ marginRight: "32px" }}>
        <PopIn
          style={{ display: "inline-block" }}
          pose={isTitleVisible ? "visible" : "hidden"}
          delay={300}
        >
          <ExpandOnHover>
            <a href={"https://github.com/kbrock84"}>
              <GithubImage />
            </a>
          </ExpandOnHover>
        </PopIn>
      </span>
      <PopIn
        style={{ display: "inline-block" }}
        pose={isTitleVisible ? "visible" : "hidden"}
        delay={400}
      >
        <ExpandOnHover>
          <a href={"https://twitter.com/kbrock84"}>
            <TwitterImage />
          </a>
        </ExpandOnHover>
      </PopIn>
      <IntroText />
    </AboutWrapper>
  );
};

export default About;
