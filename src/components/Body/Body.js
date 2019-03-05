import React from "react";
import { Component } from "react";
import BodyWrapper from "./BodyWrapper";
import MainMenu from "../MainMenu/MainMenu";
import ContentContainer from "../ContentContainer/ContentContainer";
import { PageContext } from "../../PageContext/PageContext";

class Body extends Component {
  constructor(props) {
    super(props);
    this.throttled = false;
  }

  static contextType = PageContext;

  setLayout() {
    setTimeout(() => {
      if (window.innerWidth < 766 && !this.context.mobile) {
        if (this.context.mobile !== true) {
          this.context.setIsMobile(true);
        }
      } else if (window.innerWidth >= 766 && this.context.mobile) {
        if (this.context.mobile !== false) {
          this.context.setIsMobile(false);
        }
      }
      this.context.setResetMenuLayout(true);
      this.throttled = false;
    }, 200);
    this.throttled = true;
  }

  componentDidMount() {
    this.context.setIsMobile(window.innerWidth < 766);
    window.addEventListener("resize", this.setLayout.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setLayout);
  }

  render() {
    return (
      <>
        <BodyWrapper mobile={this.context.mobile}>
          <>
            <MainMenu width={268} menuItems={this.props.categories} />
            <ContentContainer title={this.props.title}>
              {this.props.children}
            </ContentContainer>
          </>
        </BodyWrapper>
      </>
    );
  }
}

export default Body;
