/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve("src/templates/post.js");
  const postCategoryTemplate = path.resolve("src/templates/post-category.js");

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              category
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    console.log(res.data);
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      });
    });
    res.data.allPostCategoriesJson.edges.forEach(({ node }) => {
      createPage({
        path: node.link,
        component: postCategoryTemplate
      });
    });
  });
};
