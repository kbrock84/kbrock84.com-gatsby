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
