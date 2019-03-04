import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import BaseStructure from "../components/BaseStructure/BaseStructure";

export default function Template({ data }) {
  const postExcerpts = data.allMarkdownRemark.edges.map(e => ({
    html: e.node.excerpt,
    path: e.node.frontmatter.path,
    title: e.node.frontmatter.title
  }));

  const title = data.allPostCategoriesJson.edges[0].node.label;
  console.log(title);

  return (
    <BaseStructure title={title}>
      {postExcerpts.map((excerpt, i) => (
        <div style={{ paddingBottom: "24px" }} key={`post-excerpt-${i}`}>
          <h2>{excerpt.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: excerpt.html }} />
          <Link to={excerpt.path}>Continue Reading...</Link>
        </div>
      ))}
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

    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "JavaScript" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100, format: HTML)
          frontmatter {
            title
            path
            category
          }
        }
      }
    }
  }
`;
