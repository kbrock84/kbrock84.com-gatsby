/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("./prism.css");
require("./base-styles.css");
const React = require("react");
const PageContextProvider = require("./src/PageContext/PageContext")
  .PageContextProvider;

export const wrapRootElement = ({ element }) => {
  return <PageContextProvider>{element}</PageContextProvider>;
};
