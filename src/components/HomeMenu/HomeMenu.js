import React from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import HomeMenuItem from "./HomeMenuItem";
import { PageContext } from "../../PageContext/PageContext";

const HomeMenu = props => {
  return (
    <PageContext.Consumer>
      {context => {
        return (
          <>
            <HomeMenuWrapper
              mobile={context.mobile}
              menuImageSet={props.menuImageSet}
            >
              <RadialRender r={context.mobile ? 130 : 230}>
                {React.Children.toArray(props.children).map((child, i) => {
                  return (
                    <HomeMenuItem
                      r={context.mobile ? 30 : 34}
                      key={`home-menu-item-${i}`}
                      mobile={context.mobile}
                    >
                      {child}
                    </HomeMenuItem>
                  );
                })}
              </RadialRender>
            </HomeMenuWrapper>
          </>
        );
      }}
    </PageContext.Consumer>
  );
};

export default HomeMenu;
