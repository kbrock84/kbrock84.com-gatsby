import React, { FunctionComponent } from "react";
import { StaticQuery, graphql } from "gatsby";
import BaseStructureWrappper from "./BaseStructureWrapper";

import Body from "../Body/Body";
import "../../components/body-styles.css";

type QueryData = {
  allPostCategoriesJson: {
    edges: {
      node: {
        label: string;
      };
    }[];
  };
  allMarkdownRemark: {
    edges: {
      node: {
        frontmatter: {
          title: string;
          path: string;
          category: string;
        };
      };
    }[];
  };
};

export const BaseStructure: FunctionComponent<{ title: string }> = props => {
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
      render={data => render(props.title, data as QueryData, props.children)}
    />
  );
};

const render = (title: string, data: QueryData, childComponents: any) => {
  {
    const categories = data.allPostCategoriesJson.edges.map(e => e.node.label);
    const postData: PostData = [];

    categories.forEach(cat => {
      postData.push({
        category: cat,
        children: data.allMarkdownRemark.edges
          .filter(e => e.node.frontmatter.category === cat)
          .map(e => ({
            title: e.node.frontmatter.title,
            path: e.node.frontmatter.path
          }))
      });
    });
    return (
      <>
        <BaseStructureWrappper>
          <Body title={title} categories={postData}>
            {childComponents}
          </Body>
        </BaseStructureWrappper>
      </>
    );
  }
};

export default BaseStructure;
