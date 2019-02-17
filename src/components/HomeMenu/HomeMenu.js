import React from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import HomeMenuItem from "./HomeMenuItem";

const HomeMenu = props => {
  return (
    <HomeMenuWrapper>
      <RadialRender r={250}>
        {React.Children.toArray(props.children).map(child => {
          return <HomeMenuItem>{child}</HomeMenuItem>;
        })}
      </RadialRender>
      ;
    </HomeMenuWrapper>
  );
};

export default HomeMenu;
