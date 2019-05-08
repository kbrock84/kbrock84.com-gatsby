import * as React from "react";
import LetterContainer from "./LetterContainer";

const CircularText: React.FunctionComponent<{
  r: number;
  text: string;
  offset?: number;
  fontSize?: string;
}> = props => {
  const offset: number = props.offset || 2.5;
  const fontSize: string = props.fontSize || "1em";
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
        data-testid="test-letter-container"
      >
        {props.text.split("").map((char, index) => (
          <LetterContainer
            key={`circular-text-${index}`}
            r={props.r}
            style={{
              transform:
                `translate(${props.r - 4}px, ${props.r}px) ` +
                `rotate(${offset * index * -1}deg)`
            }}
            fontSize={fontSize}
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
