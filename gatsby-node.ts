const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({
  node,
  getNode,
  actions,
}: {
  node: any;
  getNode: any;
  actions: any;
}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({
  graphql,
  actions,
}: {
  graphql: any;
  actions: any;
}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        limit: 1000
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    throw result.error;
  }
  const posts = result.data.allMarkdownRemark.nodes;
  result.data.allMarkdownRemark.nodes.forEach((node: any, index: number) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
        previousPostId,
        nextPostId,
      },
    });
  });
};
