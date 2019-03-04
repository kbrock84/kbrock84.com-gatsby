import React from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import HomeMenuItem from "./HomeMenuItem";

const HomeMenu = props => {
  return (
    <HomeMenuWrapper menuImage={props.menuImage}>
      <RadialRender r={250}>
        {React.Children.toArray(props.children).map((child, i) => {
          return (
            <HomeMenuItem key={`home-menu-item-${i}`}>{child}</HomeMenuItem>
          );
        })}
      </RadialRender>
    </HomeMenuWrapper>
  );
};

export default HomeMenu;
