import React, { Component } from "react";

export const PageContext = React.createContext();

export class PageContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      mobile: true,
      firstMenuRender: true,
      resetMenuLayout: false,
      menuChildState: {},
      setFirstMenuRender: this.setFirstMenuRender.bind(this),
      setMenuChildExpandedState: this.setMenuChildExpandedState.bind(this),
      setMenuChildExpandedHeight: this.setMenuChildExpandedHeight.bind(this),
      setResetMenuLayout: this.setResetMenuLayout.bind(this),
      setIsMobile: this.setIsMobile.bind(this),
      getMenuChildState: this.getMenuChildState.bind(this),
      toggleVisibility: this.toggleVisibility.bind(this)
    };
  }

  toggleVisibility = () => {
    this.setState(prevState => {
      prevState.visible = !prevState.visible;
      return prevState;
    });
  };

  setResetMenuLayout = value => {
    this.setState(prevState => {
      prevState.resetMenuLayout = value;
      return prevState;
    });
  };

  setIsMobile = value => {
    this.setState(prevState => {
      prevState.mobile = value;
      return prevState;
    });
  };

  setFirstMenuRender(value) {
    this.setState(prevState => {
      prevState.firstRender = value;
      return prevState;
    });
  }

  setMenuChildExpandedState = (key, expanded) => {
    this.setState(prevState => {
      let menuChild = prevState.menuChildState[key];
      menuChild.expanded = expanded;
      prevState.menuChildState[key] = menuChild;
      return prevState;
    });
  };

  setMenuChildExpandedHeight = (key, height) => {
    this.setState(prevState => {
      let menuChild;
      if (prevState.menuChildState[key]) {
        menuChild = prevState.menuChildState[key];
        menuChild.height = height;
      } else {
        menuChild = { expanded: true, height: height };
        prevState.menuChildState[key] = menuChild;
      }
      return prevState;
    });
  };

  getMenuChildState = key => {
    let childState = this.state.menuChildState[key];
    if (childState === undefined) {
      childState = { expanded: true, height: 0 };
      this.setState(prevState => {
        prevState.menuChildState[key] = childState;
      });
    } else {
      console.log(childState);
    }
    return childState;
  };

  render() {
    return (
      <PageContext.Provider value={this.state}>
        {this.props.children}
      </PageContext.Provider>
    );
  }
}
