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
          filter: {
            fixed: { originalName: { eq: "sticky-bot_cropped_edited2.jpg" } }
          }
        ) {
          edges {
            node {
              ... on ImageSharp {
                resize(width: 500, height: 500) {
                  src
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
      return (
        <IndexPageContainer>
          <Home
            menuImage={data.allImageSharp.edges[0].node.resize.src}
            homeMenuItems={menuItems}
          />
        </IndexPageContainer>
      );
    }}
  />
);

export default IndexPage;
