import React from "react";
import styled from "styled-components";

const TitleText = styled.h6`
  font-size: ${props => props.fontSize};
  line-height: 1em;
  margin-top: -0.1em;
  margin-bottom: -0.1em;
`;

// fontSize: props.fontSize || "1em",
const KevinTitle = props => {
  return (
    <div
      style={{
        padding: "0",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <TitleText fontSize={props.fontSize}>Kevin Brock</TitleText>
      </div>
      <div>
        <div
          style={{
            fontSize: "0.3em",
            margin: "0",
            padding: "0",
            display: "inline-block",
            transform: " translateY(-1.3em) rotate(-45deg)"
          }}
        >
          <div>
            <h6 style={{ marginBottom: "-0.5em" }}>WEB</h6>
          </div>
        </div>
        <TitleText
          fontSize={props.fontSize}
          style={{ display: "inline-block" }}
        >
          Developer
        </TitleText>
      </div>
    </div>
  );
};

export default KevinTitle;
