import React from "react";
import MenuTreeItem from "./MenuTreeItem";

const MenuChildWrapper = props => {
  return (
    <MenuTreeItem
      item={props.child}
      width={props.width}
      depth={props.depth}
      fontColor={props.fontColor}
      opacity={props.opacity}
    />
  );
};

export default MenuChildWrapper;
