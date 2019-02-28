import React, { Component } from "react";
import MenuItemWrapper from "./MenuItemWrapper";
import MainMenuLink from "./MainMenuLink";
import MenuListWrapper from "./MenuListWrapper";
import RotateChild from "./RotateChild";
import Poly from "react-svg-polygon";
import uuid from "uuid/v4";

class MenuTreeItem extends Component {
  constructor(props) {
    super(props);
    this.childRefs = this.props.childItems.map(c => React.createRef());

    this.state = {
      collapsed: false,
      padding: 12,
      expandTo: 0
    };
  }

  componentDidMount() {
    if (this.childRefs.length > 0) {
      const firstChildRect = this.childRefs[0].current.getBoundingClientRect();
      const lastChildRect = this.childRefs[
        this.childRefs.length - 1
      ].current.getBoundingClientRect();

      const bottom = Math.ceil(
        lastChildRect.y - firstChildRect.y + lastChildRect.height
      );

      this.setState({
        expandTo: bottom,
        collapsed: true
      });
    } else {
      this.setState({ collapsed: true });
    }
  }

  toggleCollapse() {
    this.setState(prevState => {
      return { collapsed: !prevState.collapsed };
    });
  }

  render() {
    return (
      <>
        <MenuItemWrapper
          onClick={this.toggleCollapse.bind(this)}
          color={`rgba(255, 100, 255)`}
          deviders={false}
        >
          <RotateChild
            angle={this.state.collapsed ? "-90deg" : "0deg"}
            style={{ marginRight: "4px" }}
          >
            <Poly
              r={6}
              sides={3}
              stroke={"none"}
              fill={"rgba(255, 100, 255)"}
            />
          </RotateChild>
          {this.props.item.title}
        </MenuItemWrapper>
        <MenuListWrapper
          padding={this.state.padding}
          collapsed={this.state.collapsed}
          expandTo={this.state.expandTo}
        >
          {this.props.childItems.map((child, i) => {
            return (
              <MenuItemWrapper
                key={uuid()}
                ref={this.childRefs[i]}
                deviders={true}
              >
                <MainMenuLink color={`rgba(200, 180, 255)`} to={child.path}>
                  {child.title}
                </MainMenuLink>
              </MenuItemWrapper>
            );
          })}
        </MenuListWrapper>
      </>
    );
  }
}

export default MenuTreeItem;
