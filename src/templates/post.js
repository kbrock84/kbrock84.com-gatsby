import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BaseStructure from "../components/BaseStructure/BaseStructure";
import { PageContextProvider } from "../PageContext/PageContext";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.keywords}
      />
      <PageContextProvider>
        <BaseStructure title={post.frontmatter.title}>
          <div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </BaseStructure>
      </PageContextProvider>
    </>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        keywords
      }
    }
  }
`;
