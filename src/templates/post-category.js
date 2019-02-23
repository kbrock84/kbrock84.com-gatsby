import React from "react";
import Helmet from "react-helmet";
import BaseStructure from "../components/BaseStructure/BaseStructure";

export default function Template({ data }) {
  console.log(data);

  return (
    <BaseStructure>
      <div>
        <h1>{data.allPostCategoriesJson.edges[0].node.label}</h1>
      </div>
    </BaseStructure>
  );
}

export const postQuery = graphql`
  query postCategoryByPath($path: String!) {
    allPostCategoriesJson(filter: { link: { eq: $path } }) {
      edges {
        node {
          label
        }
      }
    }
  }
`;
