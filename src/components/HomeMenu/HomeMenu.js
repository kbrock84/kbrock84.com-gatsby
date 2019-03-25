import React, { useEffect, useState } from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import { PageContext } from "../../PageContext/PageContext";
import PopIn from "../../Animations/PopIn";
import ExpandOnHover from "../../Animations/ExpandOnHover";

const HomeMenu = props => {
  const [animationTrigger, triggerAnimation] = useState(false);
  useEffect(() => {
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
              <RadialRender r={context.mobile ? 130 : 230}>
                {React.Children.toArray(props.children).map((child, i) => {
                  return (
                    <PopIn
                      pose={animationTrigger ? "visible" : "hidden"}
                      delay={40 * i}
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
