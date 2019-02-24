import React, { Component } from "react";
import MenuItemWrapper from "./MenuItemWrapper";
import MainMenuLink from "./MainMenuLink";
import MenuListWrapper from "./MenuListWrapper";
import RotateChild from "./RotateChild";
import Poly from "react-svg-polygon";
import uuid from "uuid/v4";

class MenuTreeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      padding: 12
    };
  }

  toggleCollapse() {
    this.setState(prevState => {
      return { collapsed: !prevState.collapsed };
    });
  }

  render() {
    return (
      <>
        <MenuItemWrapper
          onClick={this.toggleCollapse.bind(this)}
          color={`rgba(255, 100, 255)`}
        >
          <RotateChild
            angle={this.state.collapsed ? "-90deg" : "0deg"}
            style={{ marginRight: "4px" }}
          >
            <Poly
              r={6}
              sides={3}
              stroke={"none"}
              fill={"rgba(255, 100, 255)"}
            />
          </RotateChild>
          {this.props.item.title}
        </MenuItemWrapper>
        <MenuListWrapper
          padding={this.state.padding}
          collapsed={this.state.collapsed}
        >
          {this.props.childItems.map((child, i) => {
            return (
              <MenuItemWrapper key={uuid()}>
                <MainMenuLink color={`rgba(200, 180, 255)`} to={child.path}>
                  {child.title}
                </MainMenuLink>
              </MenuItemWrapper>
            );
          })}
        </MenuListWrapper>
      </>
    );
  }
}

export default MenuTreeItem;
