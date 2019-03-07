import React, { Component } from "react";
import HomeMenu from "../HomeMenu/HomeMenu";
import MenuChildLink from "./MenuChildLink";
import HomeHeading from "./HomeHeading";
import { PageContext } from "../../PageContext/PageContext";
import HomeWrapper from "./HomeWrapper";

class Home extends Component {
  static contextType = PageContext;
  render() {
    return (
      <>
        <HomeHeading color={"#00ffff"}>
          <div
            style={{
              margin: "0",
              padding: "0",
              fontSize: this.context.mobile ? "1.8em" : "2.5em"
            }}
          >
            <div>
              <p>Kevin Brock</p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.3em",
                  margin: "0",
                  padding: "0",
                  display: "inline-block"
                }}
              >
                <div
                  style={{ transform: " translateY(-0.5em) rotate(-45deg)" }}
                >
                  <p style={{ fontSize: "1.5em" }}>WEB</p>
                </div>
              </div>
              Developer
            </div>
          </div>
        </HomeHeading>

        <HomeMenu menuImageSet={this.props.menuImageSet}>
          {this.props.homeMenuItems.map((item, i) => (
            <MenuChildLink to={item.link} key={`main-menu-child-${i}`}>
              {item.label}
            </MenuChildLink>
          ))}
        </HomeMenu>
        {/* //change from margin auto to flexbox */}
      </>
    );
  }
}

export default Home;
