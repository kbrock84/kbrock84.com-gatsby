import React, { Component } from "react";
import MenuItemWrapper from "./MenuItemWrapper";
import MainMenuLink from "./MainMenuLink";
import MenuListWrapper from "./MenuListWrapper";
import RotateChild from "./RotateChild";
import Poly from "react-svg-polygon";
import { MenuContext } from "./MenuContext";

class MenuTreeItem extends Component {
  constructor(props) {
    super(props);
    this.childRefs = this.props.childItems.map(c => React.createRef());
    this.state = {
      padding: 12
    };
  }

  componentDidMount() {
    if (this.context.firstRender) {
      let height = 0;
      let rect;
      this.childRefs.forEach(c => {
        rect = c.current.getBoundingClientRect();
        console.log("rect:");
        console.log(rect);
        height += rect.height + 8;
      });

      this.context.setMenuChildExpandedHeight(this.props.localStoreKey, height);
      this.context.setMenuChildExpandedState(this.props.localStoreKey);
      this.context.setFirstRender();
    }
  }

  static contextType = MenuContext;

  toggleCollapse() {
    this.context.setMenuChildExpandedState(this.props.localStoreKey);
  }

  render() {
    const childState = this.context.getMenuChildState(this.props.localStoreKey);
    //console.log(childState);
    return (
      <>
        <MenuItemWrapper
          onClick={this.toggleCollapse.bind(this)}
          color={`rgba(255, 100, 255)`}
          deviders={false}
        >
          <RotateChild
            angle={!childState.expanded ? "-90deg" : "0deg"}
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
          collapsed={!childState.expanded}
          expandTo={childState.height}
          firstRender={this.context.firstRender}
        >
          {this.props.childItems.map((child, i) => {
            return (
              <MenuItemWrapper
                key={`${this.props.item.title}-child-${i}`}
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
