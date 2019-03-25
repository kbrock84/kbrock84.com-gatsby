import React, { Component } from "react";
import MenuItemWrapper from "./MenuItemWrapper";
import MainMenuLink from "./MainMenuLink";
import MenuListWrapper from "./MenuListWrapper";
import RotateChild from "./RotateChild";
import Poly from "react-svg-polygon";
import { PageContext } from "../../PageContext/PageContext";

class MenuTreeItem extends Component {
  constructor(props) {
    super(props);
    this.childRefs = this.props.childItems.map(c => React.createRef());
    this.state = {
      padding: 12,
      renderTrigger: 0,
      childState: { expanded: false, height: 0 },
      isChildStateSet: false
    };
  }

  componentDidMount() {
    this.setLayout();
  }

  triggerRerender() {
    this.setState(prevState => {
      prevState.renderTrigger++;
      return prevState;
    });
  }

  setLayout() {
    if (this.context.firstMenuRender || this.context.resetMenuLayout) {
      if (this.childRefs[0] !== undefined) {
        let height = 0;
        let rect;

        for (let i = 0; i < this.childRefs.length; i++) {
          const c = this.childRefs[i];
          if (c.current !== null) {
            rect = c.current.getBoundingClientRect();
            height += rect.height;
          } else {
            this.triggerRerender();
            break;
          }
        }

        if (height === 0) {
          height = this.childRefs.length * 16;
        }
        height += this.childRefs.length * 8;

        this.context.setMenuChildExpandedHeight(
          this.props.localStoreKey,
          height
        );
        this.context.setMenuChildExpandedState(this.props.localStoreKey, false);

        this.context.setResetMenuLayout(false);
        this.context.setFirstMenuRender(false);
      }
    } else {
      this.triggerRerender();
    }
  }

  componentDidUpdate() {
    if (!this.state.isChildStateSet) {
      this.setState(prevState => {
        prevState.childState = this.context.getMenuChildState(
          this.props.localStoreKey
        );
        prevState.isChildStateSet = true;
        return prevState;
      });
    }
    if (this.context.resetMenuLayout) {
      if (this.context.resetMenuLayout && !this.state.childState.expanded) {
        this.toggleExpandedState(true);
      } else {
        this.setLayout();
      }
    }
  }

  static contextType = PageContext;

  toggleExpandedState() {
    this.context.setMenuChildExpandedState(
      this.props.localStoreKey,
      !this.context.getMenuChildState(this.props.localStoreKey).expanded
    );
  }

  render() {
    return (
      <>
        <MenuItemWrapper
          onClick={this.toggleExpandedState.bind(this)}
          color={`rgb(255, 100, 255)`}
          deviders={false}
        >
          <RotateChild
            angle={!this.state.childState.expanded ? "-90deg" : "0deg"}
            style={{ marginRight: "4px" }}
          >
            <Poly r={6} sides={3} stroke={"none"} fill={"rgb(255, 100, 255)"} />
          </RotateChild>
          {this.props.item.title}
        </MenuItemWrapper>
        <MenuListWrapper
          padding={this.state.padding}
          expanded={
            this.state.childState.expanded || this.context.resetMenuLayout
          }
          expandTo={this.state.childState.height}
        >
          {this.props.childItems.map((child, i) => {
            return (
              <MenuItemWrapper
                key={`${this.props.item.title}-child-${i}`}
                ref={this.childRefs[i]}
                deviders={true}
              >
                <MainMenuLink color={`rgb(200, 180, 255)`} to={child.path}>
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
