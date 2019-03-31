import React, { useContext, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import KevinTitle from "../KevinTitle/KevinTitle";
import { PageContext } from "../../PageContext/PageContext";
import posed from "react-pose";
import TypeText from "react-typist";
import PopIn from "../../Animations/PopIn";
import ExpandOnHover from "../../Animations/ExpandOnHover";
import GithubImage from "../GithubImage";
import TwitterImage from "../TwitterImage";

const ContactWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: #080808;
  color: #ff00ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  ${props => (props.mobile ? "" : "padding-left: 16px")}
`;

const TansitionColor = posed.div({
  transitionEnter: { color: "#ff00ee", fontSize: 1.3, delay: 200 },
  original: { color: "#00ffff" }
});

const TypeTextWrapper = styled.span`
  color: #00ffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContactMe = () => {
  const context = useContext(PageContext);
  const [animationTrigger, triggerAnimation] = useState(false);
  useLayoutEffect(() => triggerAnimation(true));
  return (
    <>
      <ContactWrapper>
        <div>
          <PopIn
            style={{ display: "inline-block" }}
            pose={animationTrigger ? "visible" : "hidden"}
            delay={300}
          >
            <ExpandOnHover>
              <a href={"https://github.com/kbrock84"}>
                <GithubImage />
              </a>
            </ExpandOnHover>
          </PopIn>

          <PopIn
            style={{ display: "inline-block" }}
            pose={animationTrigger ? "visible" : "hidden"}
            delay={400}
          >
            <ExpandOnHover>
              <a href={"https://twitter.com/kbrock84"}>
                <TwitterImage />
              </a>
            </ExpandOnHover>
          </PopIn>
        </div>
        <ContactCard mobile={context.mobile}>
          <TansitionColor
            pose={animationTrigger ? "transitionEnter" : "original"}
          >
            <KevinTitle fontSize={context.mobile ? "1.6em" : "2.5em"} />
          </TansitionColor>
        </ContactCard>
        <div>
          <TypeTextWrapper>
            <TypeText avgTypingDelay={35}>
              <code>
                @kbrock84
                <br />
                <a
                  style={{ color: "#00ffff", textDecoration: "none" }}
                  href={"mailto:kevin@kbrock84.com"}
                >
                  kevin@kbrock84.com
                </a>
                <br />
                <a
                  style={{ color: "#00ffff", textDecoration: "none" }}
                  href={"tel:+14253014732"}
                >
                  425.301.4732
                </a>
              </code>
            </TypeText>
          </TypeTextWrapper>
        </div>
      </ContactWrapper>
    </>
  );
};

export default ContactMe;
