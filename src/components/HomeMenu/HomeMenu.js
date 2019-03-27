import React, { useState, useLayoutEffect } from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import { PageContext } from "../../PageContext/PageContext";
import PopIn from "../../Animations/PopIn";
import ExpandOnHover from "../../Animations/ExpandOnHover";

const HomeMenu = props => {
  const [animationTrigger, triggerAnimation] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => triggerAnimation(true), 100);
  });
  return (
    <PageContext.Consumer>
      {context => {
        return (
          <>
            <HomeMenuWrapper
              mobile={context.mobile}
              menuImageSet={props.menuImageSet}
            >
              <RadialRender r={context.mobile ? 130 : 250}>
                {React.Children.toArray(props.children).map((child, i) => {
                  return (
                    <PopIn
                      key={`main-menu-item-${i}`}
                      pose={animationTrigger ? "visible" : "hidden"}
                      delay={40 * i}
                      style={{ opacity: 0 }}
                    >
                      <ExpandOnHover>{child}</ExpandOnHover>
                    </PopIn>
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
