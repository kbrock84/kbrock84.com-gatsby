import React from "react";
import Markdown from "markdown-to-jsx";

const MD = props => {
  return <Markdown>{props.children}</Markdown>;
};

export default MD;
