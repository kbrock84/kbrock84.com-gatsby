import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Home from "../components/Home/Home";
import IndexPageContainer from "../components/IndexPageContainer/IndexPageContainer";

//import SEO from "../components/seo";

const IndexPage = props => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp(
          filter: { fixed: { originalName: { eq: "sticky-bot_dark_600.jpg" } } }
        ) {
          edges {
            node {
              ... on ImageSharp {
                fluid(
                  duotone: {
                    highlight: "#333333"
                    shadow: "#080808"
                    opacity: 100
                  }
                ) {
                  srcSet
                }
              }
            }
          }
        }

        allPostCategoriesJson {
          edges {
            node {
              label
              link
            }
          }
        }
      }
    `}
    render={data => {
      const menuItems = data.allPostCategoriesJson.edges.map(e => ({
        label: e.node.label,
        link: e.node.link
      }));
      const srcSet = data.allImageSharp.edges[0].node.fluid.srcSet
        .split(",\n")
        .map(s => s.replace(/\s\d{3}w/, ""));
      return (
        <IndexPageContainer>
          <Home menuImageSet={srcSet} homeMenuItems={menuItems} />
        </IndexPageContainer>
      );
    }}
  />
);

export default IndexPage;
