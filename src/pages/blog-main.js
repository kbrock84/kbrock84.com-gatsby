import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import BaseStructure from "../components/BaseStructure/BaseStructure";
import { PageContextProvider } from "../PageContext/PageContext";

export default function Template({ data }) {
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                excerpt(pruneLength: 250, format: HTML)
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
      render={data => {
        const postExcerpts = data.allMarkdownRemark.edges.map(e => ({
          html: e.node.excerpt,
          path: e.node.frontmatter.path,
          title: e.node.frontmatter.title
        }));
        return (
          <PageContextProvider>
            <BaseStructure title={"kevDevBlog"}>
              {postExcerpts.map((excerpt, i) => (
                <div
                  style={{ paddingBottom: "24px" }}
                  key={`post-excerpt-${i}`}
                >
                  <h2>{excerpt.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: excerpt.html }} />
                  <Link to={excerpt.path}>Continue Reading...</Link>
                </div>
              ))}
            </BaseStructure>
          </PageContextProvider>
        );
      }}
    />
  );
}
