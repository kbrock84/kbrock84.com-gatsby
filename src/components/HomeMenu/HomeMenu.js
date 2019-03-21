import React, { useEffect, useState } from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import HomeMenuItem from "./HomeMenuItem";
import { PageContext } from "../../PageContext/PageContext";
import posed from "react-pose";

const AnimateMenuItem = posed.div({
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: "500", mass: 0.7 },
    delay: props => props.delay
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: { type: "spring", stiffness: "500", mass: 0.7 },
    delay: props => props.delay
  }
});

const AnimateHover = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    transition: { type: "spring", stiffness: "350", mass: 1, damping: 12 },
    scale: 1.2
  },
  press: {
    scale: 0.95
  }
});

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
                    <AnimateMenuItem
                      pose={animationTrigger ? "visible" : "hidden"}
                      delay={50 * i}
                    >
                      <AnimateHover>{child}</AnimateHover>
                    </AnimateMenuItem>
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
