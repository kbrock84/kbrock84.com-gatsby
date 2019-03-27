import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const StickyBotImage = () => {
  const data = useStaticQuery(graphql`
    query StickyBotImage {
      placeholderImage: file(relativePath: { eq: "sticky-bot_dark.jpg" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />;
};

export default StickyBotImage;
