import React from "react";
import LetterContainer from "./LetterContainer";

const CircularText = props => {
  return (
    <div
      style={{
        color: "#ff00ff",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          position: "relative",
          height: `${props.r * 2}px`,
          width: `${props.r * 2}px`
        }}
      >
        {props.text.split("").map((char, index) => (
          <LetterContainer
            key={`circular-text-${index}`}
            r={props.r}
            style={{
              transform: `
               translate(${props.r - 4}px, ${props.r}px)
                rotate(${2.5 * index * -1}deg)`
            }}
          >
            {char}
          </LetterContainer>
        ))}
        {props.children}
      </div>
    </div>
  );
};

export default CircularText;
