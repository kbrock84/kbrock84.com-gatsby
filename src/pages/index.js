import React from "react";
import { Link, graphql } from "gatsby";
import BaseStructure from "../components/BaseStructure/BaseStructure";

//import SEO from "../components/seo";

const IndexPage = () => <BaseStructure blogPosts={BlogPostList} />;

export default IndexPage;

const BlogPostList = graphql`
  {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
