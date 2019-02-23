import React, { Component } from "react";
import HomeMenu from "../HomeMenu/HomeMenu";
import MenuChildLink from "./MenuChildLink";

class Home extends Component {
  render() {
    return (
      <HomeMenu menuImage={this.props.menuImage} style={{ margin: "auto" }}>
        {this.props.homeMenuItems.map(item => (
          <MenuChildLink to={item.link}>{item.label}</MenuChildLink>
        ))}
      </HomeMenu>
    );
  }
}

export default Home;
