import React, { Component } from "react";
import Card from "../Card/Card";
import MenuChildWrapper from "./MenuChildWrapper";
import HVLine from "../BlankCanvas/HVLine";
import MenuItemWrapper from "./MenuItemWrapper";

class MenuTreeItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
      padding: 12
    };
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
          color={`rgba(${255 - this.props.depth * 70},100, 255)`}
        >
          {this.props.item.heading}
        </MenuItemWrapper>
        <div
          style={{
            paddingLeft: this.state.padding + "px"
          }}
        >
          {this.state.collapsed
            ? null
            : this.props.item.children.map((child, j) => {
                return (
                  <div>
                    <MenuChildWrapper
                      child={child}
                      key={j}
                      width={this.props.width - this.state.padding}
                      depth={this.props.depth + 1}
                      fontColor={this.props.fontColor}
                    />
                  </div>
                );
              })}
        </div>
      </>
    );
  }
}

export default MenuTreeItem;
