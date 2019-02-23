import React from "react";
import { StaticQuery } from "gatsby";
import BaseStructureWrappper from "./BaseStructureWrapper";

import Body from "../Body/Body";
import "../../components/body-styles.css";

export const BaseStructure = props => {
  return (
    <StaticQuery
      query={graphql`
        {
          allPostCategoriesJson {
            edges {
              node {
                label
              }
            }
          }
          allMarkdownRemark(limit: 100) {
            edges {
              node {
                frontmatter {
                  title
                  path
                  category
                }
              }
            }
          }
        }
      `}
      render={data => render(data, props.children)}
    />
  );
};

const render = (data, childComponents) => {
  {
    const categories = data.allPostCategoriesJson.edges.map(e => ({
      title: e.node.label
    }));
    const postData = [];

    categories.forEach(cat => {
      postData.push({
        category: cat,
        children: data.allMarkdownRemark.edges
          .filter(e => e.node.frontmatter.category == cat.title)
          .map(e => ({
            title: e.node.frontmatter.title,
            path: e.node.frontmatter.path
          }))
      });
    });
    return (
      <>
        <BaseStructureWrappper>
          <Body categories={postData}>{childComponents}</Body>
        </BaseStructureWrappper>
      </>
    );
  }
};

export default BaseStructure;
