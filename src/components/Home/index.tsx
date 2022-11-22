import React from 'react';
// import Helmet from 'react-helmet';
import PostSection from './PostSection';
import Headline from './Headline';
import { PageProps } from 'gatsby';

const Home = ({
  data: {
    allMarkdownRemark: { nodes },
    technology,
    music,
    other,
  },
}: PageProps<Queries.BlogIndexQuery>) => {
  // const siteTitle = site.siteMetadata.title;
  const postsSlugs = nodes.slice(0, 3).map((post) => post.fields?.slug);
  const filterPosts = (
    posts: Queries.BlogIndexQuery['allMarkdownRemark']['nodes'],
  ) =>
    posts.filter((post) => !postsSlugs.includes(post.fields?.slug)).slice(0, 3);
  const technologyPosts = filterPosts(technology.nodes);
  const musicPosts = filterPosts(music.nodes);
  const otherPosts = filterPosts(other.nodes);

  return (
    <>
      {/* <Helmet title={siteTitle} /> */}
      <main>
        <Headline posts={nodes} title="The Latest" />
        <PostSection posts={technologyPosts} title="Technology" />
        <PostSection posts={musicPosts} title="Music" />
        <PostSection posts={otherPosts} title="Musings" />
      </main>
    </>
  );
};

export default Home;
