import React, { Component } from "react";
import MainMenuWrapper from "./MainMenuWrapper";
import NavButton from "../NavButton/NavButton";
import MenuTreeItem from "./MenuTreeItem";
import AllItemsContainer from "./AllItemsContainer";
import { MenuContext } from "./MenuContext";

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: Boolean(localStorage.getItem("menuIsVisible")),
      mobileLayout: Boolean(localStorage.getItem("menuIsMobileLayout"))
    };
  }

  toggleMenuVisibility() {
    this.setState(prevState => {
      localStorage.setItem("menuIsVisible", String(!prevState.visible));
      prevState.visible = !prevState.visible;
      return prevState;
    });
  }

  setLayout() {
    setTimeout(() => {
      if (
        window.innerWidth < this.props.mobileThreshold &&
        !this.context.mobile
      ) {
        this.context.setIsMobile(true);
      } else if (
        window.innerWidth >= this.props.mobileThreshold &&
        this.context.mobile
      ) {
        this.context.setIsMobile(false);
      }
      this.throttled = false;
    }, 200);
    this.throttled = true;
  }

  componentDidMount() {
    this.context.setIsMobile(window.innerWidth < this.props.mobileThreshold);
    window.addEventListener("resize", this.setLayout.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setLayout);
  }

  static contextType = MenuContext;

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
                const key = `${item.category.title.replace(/\s/, "_")}_${i}`;
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
