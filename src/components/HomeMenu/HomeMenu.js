import React, { useEffect, useState } from "react";
import RadialRender from "react-radial-render";
import HomeMenuWrapper from "./HomeMenuWrapper";
import HomeMenuItem from "./HomeMenuItem";
import { PageContext } from "../../PageContext/PageContext";
import posed from "react-pose";
import { spread } from "q";

const AnimateMenuItem = posed.div({
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: "500", mass: 0.7 },
    delay: props => props.delay
    // x: 0,
    // y: 0
  },
  hidden: {
    opacity: 0,
    scale: 0.2,
    transition: { type: "spring", stiffness: "500", mass: 0.7 },
    delay: props => props.delay
    // x: props => props.x,
    // y: props => props.y
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
    scale: 1.3
  },
  press: {
    scale: 0.9
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
                      x={Math.sin(i) * 100 * (i + 1 * -2) + 100}
                      y={Math.cos(i) * 30 * (i + 1 * -2) + 100}
                      delay={50 * i}
                    >
                      <AnimateHover>
                        <HomeMenuItem
                          r={context.mobile ? 30 : 34}
                          key={`home-menu-item-${i}`}
                          mobile={context.mobile}
                        >
                          {child}
                        </HomeMenuItem>
                      </AnimateHover>
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
