import React from "react";
import ContentContainerWrapper from "./ContentContainerWrapper";
import ContentWrapper from "./ContentWrapper";

const ContentContainer = props => {
  return (
    <ContentContainerWrapper>
      <div
        style={{
          margin: "8px 5% 0px 5%",
          backgroundColor: "#1e1e1e",
          borderRadius: "16px 16px 0px 0px",
          minHeight: "100px",
          color: "#fefefe",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.2em",
          textAlign: "center",
          paddingTop: "8px"
        }}
      >
        <h1 style={{ width: "90%" }}>{props.title}</h1>
      </div>
      <ContentWrapper>{props.children}</ContentWrapper>
      <div style={{ height: "70px" }} />
    </ContentContainerWrapper>
  );
};

export default ContentContainer;
