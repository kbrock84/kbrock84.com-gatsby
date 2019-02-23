import React, { Component } from "react";
import MainMenuWrapper from "./MainMenuWrapper";
import NavButton from "../NavButton/NavButton";
import MenuTreeItem from "./MenuTreeItem";
import AllItemsContainer from "./AllItemsContainer";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      visible: props.visible
    };
  }

  toggleCollapse() {
    this.setState(prevState => {
      return { collapsed: !prevState.collapsed };
    });
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
                <>
                  <MenuTreeItem
                    item={item.category}
                    childItems={item.children}
                    width={this.props.width}
                    key={i}
                    depth={0}
                    fontColor={"#fefefe"}
                  />
                </>
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
