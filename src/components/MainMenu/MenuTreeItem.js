import React, { Component } from "react";
import MenuItemWrapper from "./MenuItemWrapper";
import MainMenuLink from "./MainMenuLink";
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
          {this.props.item.title}
        </MenuItemWrapper>
        <div
          style={{
            paddingLeft: this.state.padding + "px"
          }}
        >
          {this.state.collapsed
            ? null
            : this.props.childItems.map(child => {
                return (
                  <MenuItemWrapper>
                    <MainMenuLink color={`rgba(200, 180, 255)`} to={child.path}>
                      {child.title}
                    </MainMenuLink>
                  </MenuItemWrapper>
                );
              })}
        </div>
      </>
    );
  }
}

export default MenuTreeItem;
