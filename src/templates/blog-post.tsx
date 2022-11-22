import React from 'react';
import { graphql } from 'gatsby';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faAngleLeft,
//   faAngleRight,
//   faArrowLeft,
//   faArrowRight,
//   faHome,
//   faHeartbeat,
//   faGlobeAfrica,
//   faGrinSquintTears,
//   faSlash,
// } from '@fortawesome/free-solid-svg-icons';

import Post from '../components/Post';

// library.add(
//   faAngleLeft,
//   faAngleRight,
//   faArrowLeft,
//   faArrowRight,
//   faHome,
//   faHeartbeat,
//   faGlobeAfrica,
//   faGrinSquintTears,
//   faSlash,
// );

const BlogPostTemplate = (props: any) => <Post {...props} />;

export const query = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        image
        published
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPostTemplate;
