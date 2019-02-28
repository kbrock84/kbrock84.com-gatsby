import React, { Component } from "react";
import MainMenuWrapper from "./MainMenuWrapper";
import NavButton from "../NavButton/NavButton";
import MenuTreeItem from "./MenuTreeItem";
import AllItemsContainer from "./AllItemsContainer";
import uuid from "uuid/v4";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  toggleMenuVisibility() {
    this.setState(prevState => {
      return { visible: !prevState.visible };
    });
  }

  render() {
    return (
      <MainMenuWrapper
        visible={this.state.visible}
        width={this.props.width}
        mobile={this.props.mobile}
      >
        <AllItemsContainer
          collapsed={!this.state.visible}
          mobile={this.props.mobile}
        >
          {this.props.menuItems
            ? this.props.menuItems.map((item, i) => (
                <MenuTreeItem
                  item={item.category}
                  childItems={item.children}
                  width={this.props.width}
                  key={`${item.category}-${i}`}
                  depth={0}
                  fontColor={"#fefefe"}
                />
              ))
            : null}
        </AllItemsContainer>
        <NavButton
          onClick={this.toggleMenuVisibility.bind(this)}
          color={"#fefefe"}
          isHamburger={true}
          rotate={this.state.visible && this.props.mobile ? "90deg" : "0deg"}
        />
      </MainMenuWrapper>
    );
  }
}

export default MainMenu;
