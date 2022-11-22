import React from 'react';
import { graphql, PageProps } from 'gatsby';
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

import Home from '../components/Home';

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

const BlogIndex = (props: PageProps<Queries.BlogIndexQuery>) => (
  <Home {...props} />
);

export const query = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 3
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          image
          subject
        }
      }
    }
    technology: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { published: { eq: true }, subject: { eq: "technology" } }
      }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          image
          subject
        }
      }
    }
    music: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { published: { eq: true }, subject: { in: "music" } }
      }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          image
          subject
        }
      }
    }
    travel: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { published: { eq: true }, subject: { in: "travel" } }
      }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          image
          subject
        }
      }
    }
    other: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { published: { eq: true }, subject: { in: "other" } }
      }
      limit: 6
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          image
          subject
        }
      }
    }
  }
`;

export default BlogIndex;
