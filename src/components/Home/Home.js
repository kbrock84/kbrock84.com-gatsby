import React, { Component } from "react";
import HomeMenu from "../HomeMenu/HomeMenu";
import MenuChild from "./MenuChild";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  }

  render() {
    return (
      <HomeMenu>
        <MenuChild onClick={this.props.cardClick}>JavaScript</MenuChild>
        <MenuChild onClick={this.props.cardClick}>NodeJS</MenuChild>
        <MenuChild onClick={this.props.cardClick}>React</MenuChild>
        <MenuChild onClick={this.props.cardClick}>Office 365</MenuChild>
        <MenuChild onClick={this.props.cardClick}>VBA</MenuChild>
        <MenuChild onClick={this.props.cardClick}>Excel</MenuChild>
      </HomeMenu>
    );
  }
}

export default Home;
