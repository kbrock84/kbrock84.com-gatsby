import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Home from "../components/Home/Home";
import IndexPageContainer from "../components/IndexPageContainer/IndexPageContainer";

//import SEO from "../components/seo";

// allImageSharp {
//   edges {
//     node {
//       ... on ImageSharp {
//         resize(width: 250, height: 250, grayscale: false) {
//           src
//         }
//       }
//     }
//   }
// }

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
                resize(width: 300, height: 300) {
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
