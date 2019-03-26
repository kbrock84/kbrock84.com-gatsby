import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import BaseStructure from "../components/BaseStructure/BaseStructure";
import { PageContextProvider } from "../PageContext/PageContext";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <PageContextProvider>
      <BaseStructure title={post.frontmatter.title}>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </BaseStructure>
    </PageContextProvider>
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
