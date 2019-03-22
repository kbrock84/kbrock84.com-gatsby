import React, { useContext } from "react";
import HomeMenu from "../HomeMenu/HomeMenu";
import MenuChildLink from "./MenuChildLink";
import HomeHeading from "./HomeHeading";
import { PageContext } from "../../PageContext/PageContext";
import KevinTitle from "../KevinTitle/KevinTitle";
import CircularText from "../CircularText/CircularText";
import styled from "styled-components";
import GithubImage from "../GithubImage";
import TwitterImage from "../TwitterImage";
import HomeMenuItem from "../HomeMenu/HomeMenuItem";

const LayersWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Layer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const Home = props => {
  const context = useContext(PageContext);
  return (
    <LayersWrapper>
      <Layer>
        <HomeMenu menuImageSet={props.menuImageSet}>
          {props.homeMenuItems.map((item, i) =>
            item.type == "internal" ? (
              <MenuChildLink to={item.link} key={`main-menu-child-${i}`}>
                <HomeMenuItem
                  r={context.mobile ? 28 : 34}
                  mobile={context.mobile}
                >
                  {item.label}
                </HomeMenuItem>
              </MenuChildLink>
            ) : null
          )}
          <HomeMenuItem r={context.mobile ? 30 : 34} mobile={context.mobile}>
            <a
              href={"https://twitter.com/kbrock84"}
              style={{ lineHeight: "0px" }}
            >
              <TwitterImage />
            </a>
          </HomeMenuItem>
          <HomeMenuItem r={context.mobile ? 30 : 34} mobile={context.mobile}>
            <a
              href={"https://github.com/kbrock84"}
              style={{ lineHeight: "0px" }}
            >
              <GithubImage />
            </a>
          </HomeMenuItem>
        </HomeMenu>
      </Layer>
      <Layer style={{ pointerEvents: "none" }}>
        <HomeHeading color={"#00ffff"}>
          <KevinTitle fontSize={context.mobile ? "1.8em" : "2.5em"} />
        </HomeHeading>
      </Layer>
      <Layer style={{ pointerEvents: "none" }}>
        <CircularText
          text={
            "let coffee = { roast: extra bold, cream: true, sugar: false }; const dev = coffee => writeCode(coffee); const writeCode = coffee => dev(coffee);"
          }
          r={context.mobile ? 185 : 170}
        />
      </Layer>
    </LayersWrapper>
  );
};

export default Home;
