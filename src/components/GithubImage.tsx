import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const GithubImage = () => {
  const data = useStaticQuery(graphql`
    query GithubImage {
      placeholderImage: file(relativePath: { eq: "Octocat.png" }) {
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

export default GithubImage;
