import React, { Component } from "react";
import MainMenuWrapper from "./MainMenuWrapper";
import NavButton from "../NavButton/NavButton";
import MenuTreeItem from "./MenuTreeItem";
import AllItemsContainer from "./AllItemsContainer";
import { PageContext } from "../../PageContext/PageContext";

interface MenuState {
  visible: boolean;
}

interface MenuProps {
  width: number;
  menuItems: PostData;
}

class MainMenu extends Component<MenuProps, MenuState> {
  constructor(props: MenuProps) {
    super(props);
  }

  toggleMenuVisibility() {
    this.setState(prevState => ({ visible: prevState.visible }));
  }

  static contextType = PageContext;

  render() {
    return (
      <MainMenuWrapper
        visible={this.context.visible}
        width={this.props.width}
        mobile={this.context.mobile}
      >
        <AllItemsContainer
          collapsed={!this.context.visible}
          mobile={this.context.mobile}
        >
          {this.props.menuItems
            ? this.props.menuItems.map((item, i) => {
                const key = `${item.category.replace(/\s/, "_")}_${i}`;
                return (
                  <MenuTreeItem
                    item={item.category}
                    childItems={item.children}
                    width={this.props.width}
                    key={key}
                    localStoreKey={key}
                    depth={0}
                    fontColor={"#fefefe"}
                  />
                );
              })
            : null}
        </AllItemsContainer>
        <NavButton
          onClick={this.context.toggleVisibility}
          color={"#fefefe"}
          isHamburger={!this.context.visible}
          rotate={
            this.context.visible && this.context.mobile ? "90deg" : "0deg"
          }
        />
      </MainMenuWrapper>
    );
  }
}

export default MainMenu;
