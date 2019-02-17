import React from "react";
import { Component } from "react";
import BodyWrapper from "./BodyWrapper";
import Home from "../Home/Home";
import MainMenu from "../MainMenu/MainMenu";
import MenuItem from "../MainMenu/MenuItem";
import ContentContainer from "../ContentContainer/ContentContainer";
import MD from "../MD/MD";
import { getBlog } from "../../api/blog/blogs";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      menuItems: [
        new MenuItem(1, "WEB DEV", [
          new MenuItem(2, "JavaScript"),
          new MenuItem(3, "React"),
          new MenuItem(4, "Jest")
        ]),
        new MenuItem(5, "365 DEV", [
          new MenuItem(6, "VBA", [new MenuItem(7, "Why VBA Rocks")]),
          new MenuItem(8, "Office Add-ins"),
          new MenuItem(9, "Document Automation")
        ])
      ],
      contentId: 7,
      content: "",
      mobileLayout: true
    };
  }

  setLayout() {
    if (window.innerWidth < 658 && !this.state.mobileLayout) {
      this.setState({ mobileLayout: true });
    } else if (window.innerWidth >= 658 && this.state.mobileLayout) {
      this.setState({ mobileLayout: false });
    }
  }

  componentDidMount() {
    this.setState({ loading: true, mobileLayout: window.innerWidth < 658 });
    getBlog(this.state.contentId, blog =>
      this.setState({
        content: blog,
        loading: false
      })
    );
    window.addEventListener("resize", this.setLayout.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setLayout);
  }

  toggleHome() {
    this.setState(prevState => {
      return { isHome: !prevState.isHome };
    });
  }

  render() {
    return (
      <>
        <BodyWrapper
          isHome={this.state.isHome}
          mobile={this.props.mobileLayout}
        >
          {this.state.isHome ? (
            <Home
              cardClick={this.toggleHome.bind(this)}
              cardItems={this.state.menuItems}
              mobile={this.state.mobileLayout}
            />
          ) : (
            <>
              <MainMenu
                goHome={this.toggleHome.bind(this)}
                width={268}
                menuItems={this.state.menuItems}
                visible={false}
                mobile={this.state.mobileLayout}
              />
              <ContentContainer>
                <MD>{this.state.content}</MD>
              </ContentContainer>
            </>
          )}
        </BodyWrapper>
      </>
    );
  }
}

export default Body;
