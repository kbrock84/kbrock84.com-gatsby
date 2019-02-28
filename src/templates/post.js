import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import BaseStructure from "../components/BaseStructure/BaseStructure";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <BaseStructure title={post.frontmatter.title}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </BaseStructure>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
