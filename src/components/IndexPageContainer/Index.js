import React from "react";
import Home from "../Home/Home";
import styled from "styled-components";

const IndexPageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #080808;
  background-image: ${props => "url(" + props.backgroundImage + ")"};
`;

const Index = props => {
  return (
    <IndexPageContainer>
      <Home menuImageSet={props.srcSet} homeMenuItems={props.menuItems} />
    </IndexPageContainer>
  );
};
export default Index;
