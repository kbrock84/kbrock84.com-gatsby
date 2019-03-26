import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { PageContextProvider } from "../PageContext/PageContext";
import Index from "../components/IndexPageContainer/Index";
import SEO from "../components/seo";

//import SEO from "../components/seo";

const IndexPage = () => (
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

        allMenuItemsJson {
          edges {
            node {
              type
              label
              link
            }
          }
        }
      }
    `}
    render={data => {
      const menuItems = data.allMenuItemsJson.edges.map(e => ({
        type: e.node.type,
        label: e.node.label,
        link: e.node.link
      }));
      const srcSet = data.allImageSharp.edges[0].node.fluid.srcSet
        .split(",\n")
        .map(s => s.replace(/\s\d{3}w/, ""));
      return (
        <>
          <SEO
            title="Home"
            keywords={[
              `kevin`,
              `brock`,
              `web`,
              `developer`,
              `react`,
              `reactjs`,
              `gatsby`,
              `gatsbyjs`,
              `regex`,
              `regularexpressions`,
              `expressions`
            ]}
          />
          <PageContextProvider>
            <Index srcSet={srcSet} menuItems={menuItems} />
          </PageContextProvider>
        </>
      );
    }}
  />
);

export default IndexPage;
