import React from "react";
import { Component } from "react";
import BodyWrapper from "./BodyWrapper";
import MainMenu from "../MainMenu/MainMenu";
import ContentContainer from "../ContentContainer/ContentContainer";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileLayout: true
    };
    this.throttled = false;
  }

  setLayout() {
    setTimeout(() => {
      if (window.innerWidth < 766 && !this.state.mobileLayout) {
        this.setState({ mobileLayout: true });
      } else if (window.innerWidth >= 766 && this.state.mobileLayout) {
        this.setState({ mobileLayout: false });
      }
      this.throttled = false;
    }, 200);
    this.throttled = true;
  }

  componentDidMount() {
    this.setState({ mobileLayout: window.innerWidth < 766 });
    window.addEventListener("resize", this.setLayout.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setLayout);
  }

  render() {
    return (
      <>
        <BodyWrapper
          isHome={this.state.isHome}
          mobile={this.props.mobileLayout}
        >
          <>
            <MainMenu
              width={268}
              menuItems={this.props.categories}
              visible={false}
              mobile={this.state.mobileLayout}
            />
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
