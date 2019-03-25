import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const TwitterImage = () => {
  const data = useStaticQuery(graphql`
    query TwitterImage {
      placeholderImage: file(
        relativePath: { eq: "Twitter_Social_Icon_Circle_White.png" }
      ) {
        childImageSharp {
          fixed(width: 42, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />;
};

export default TwitterImage;
