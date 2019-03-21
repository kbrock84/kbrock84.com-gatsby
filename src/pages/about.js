import React, { useState, useEffect } from "react";
import styled from "styled-components";
import posed from "react-pose";
import Typist from "react-typist";

const EnterLeft = posed.div({
  enter: {
    x: 0,
    opacity: 0.9,
    transition: { ease: "easeOut", duration: 700 }
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: { ease: "linear" }
  }
});

const EnterTop = posed.div({
  enter: {
    y: 0,
    opacity: 0.9,
    transition: {
      default: { ease: "easeOut", duration: 700 },
      opacity: { duration: 1200 }
    }
  },
  exit: {
    y: -300,
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
      <Typist avgTypingDelay={30}>
        <code style={{ color: "#00CCCC" }}>
          Hi... <Typist.Delay ms={300} />
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
          Please join me on this journey by submitting any issues to this
          website or other repos I have on GitHub, or sending me a tweet or DM
          both @kbrock84.
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
    }, 1000);
  });
  return (
    <AboutWrapper>
      <EnterTop pose={isTitleVisible ? "enter" : "exit"}>
        <h1>Kevin Brock</h1>
      </EnterTop>
      <IntroText />
    </AboutWrapper>
  );
};

export default About;
