import React from "react";
import { useContext, FunctionComponent } from "react";
import BodyWrapper from "./BodyWrapper";
import MainMenu from "../MainMenu/MainMenu";
import ContentContainer from "../ContentContainer/ContentContainer";
import { PageContext } from "../../PageContext/PageContext";

const Body: FunctionComponent<{
  title: string;
  categories: PostData;
}> = props => {
  const context = useContext(PageContext);

  return (
    <BodyWrapper mobile={context.mobile}>
      <MainMenu width={268} menuItems={props.categories} />
      <ContentContainer title={props.title}>{props.children}</ContentContainer>
    </BodyWrapper>
  );
};

export default Body;
