import React from "react";
import ContentContainerWrapper from "./ContentContainerWrapper";
import ContentWrapper from "./ContentWrapper";

const ContentContainer = props => {
  return (
    <ContentContainerWrapper>
      <ContentWrapper>{props.children}</ContentWrapper>
    </ContentContainerWrapper>
  );
};

export default ContentContainer;
