import React, { Component } from "react";

export interface ContextState {
  visible: boolean;
  mobile: boolean;
  firstMenuRender: boolean;
  resetMenuLayout: boolean;
  menuChildState: any;
  setFirstMenuRender?(value: boolean): void;
  setMenuChildExpandedState?(key: string, value: boolean): void;
  setMenuChildExpandedHeight?(key: string, height: number): void;
  setResetMenuLayout?(value: boolean): void;
  setIsMobile?(value: boolean): void;
  getMenuChildState?(key: string): { expanded: boolean; height: number };
  toggleVisibility?(value: boolean): void;
}

const defaultState: ContextState = {
  visible: false,
  mobile: true,
  firstMenuRender: true,
  resetMenuLayout: false,
  menuChildState: {}
};
export const PageContext = React.createContext(defaultState);

export class PageContextProvider extends Component<{}, ContextState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      visible: false,
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

  throttled: boolean = false;

  toggleVisibility() {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  setResetMenuLayout(value: boolean) {
    this.setState({ resetMenuLayout: value });
  }

  setIsMobile(value: boolean) {
    this.setState({ mobile: value });
  }

  setFirstMenuRender(value: boolean) {
    this.setState({ firstMenuRender: value });
  }

  setMenuChildExpandedState(key: string, expanded: boolean) {
    this.setState(prevState => {
      let menuChild = prevState.menuChildState[key];
      menuChild.expanded = expanded;
      prevState.menuChildState[key] = menuChild;
      return prevState;
    });
  }

  setMenuChildExpandedHeight(key: string, height: number) {
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
  }

  getMenuChildState(key: string) {
    let childState = this.state.menuChildState[key];
    if (childState === undefined) {
      childState = { expanded: true, height: 0 };
      this.setState(prevState => {
        prevState.menuChildState[key] = childState;
      });
    }
    return childState;
  }

  setLayout() {
    setTimeout(() => {
      if (window.innerWidth < 766 && !this.state.mobile) {
        if (!this.state.mobile) {
          this.setIsMobile(true);
        }
      } else if (window.innerWidth >= 766 && this.state.mobile) {
        if (this.state.mobile) {
          this.setIsMobile(false);
        }
      }
      this.state.setResetMenuLayout!(true);
      this.throttled = false;
    }, 200);
    this.throttled = true;
  }

  componentDidMount() {
    this.state.setIsMobile!(window.innerWidth < 766);
    window.addEventListener("resize", this.setLayout.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setLayout);
  }

  render() {
    return (
      <PageContext.Provider value={this.state}>
        {this.props.children}
      </PageContext.Provider>
    );
  }
}
