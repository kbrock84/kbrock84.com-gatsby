import React, { useState, useContext, useLayoutEffect } from "react";
import GithubImage from "../../components/GithubImage";
import TwitterImage from "../../components/TwitterImage";
import posed from "react-pose";
import PopIn from "../../Animations/PopIn.js";
import ExpandOnHover from "../../Animations/ExpandOnHover.js";
import styled from "styled-components";
import { PageContext } from "../../PageContext/PageContext";
import IntroText from "./IntroText";

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
  h1 {
    font-size: ${props => (props.mobile ? "2em" : "2.4em")};
  }
`;

const AboutMe = props => {
  const context = useContext(PageContext);
  const [isTitleVisible, setTitleVisibility] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setTitleVisibility(true);
    }, 200);
  });
  return (
    <AboutWrapper mobile={context.mobile}>
      <EnterTop
        pose={isTitleVisible ? "enter" : "exit"}
        style={{
          display: "inline-block",
          width: context.mobile ? "180px" : "250px"
        }}
      >
        <h1 style={{ display: "block", width: "250px" }}>Kevin Brock</h1>
      </EnterTop>
      <span style={{ marginRight: "12px" }}>
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

export default AboutMe;
