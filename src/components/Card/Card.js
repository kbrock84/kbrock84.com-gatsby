import React from "react";
import CardWrapper from "./CardWrapper";
import CardBody from "./CardBody";

const Card = props => {
  return (
    <CardWrapper justifyCard={props.justifyCard}>
      <CardBody
        className={"card-body"}
        onClick={props.onClick}
        isMenuStyle={props.isMenuStyle}
        width={props.width}
        height={props.height}
        fontSize={props.fontSize}
        fontColor={props.fontColor}
        r={props.r}
        backgroundColor={props.backgroundColor}
        backgroundImage={props.backgroundImage}
      >
        {props.children}
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
