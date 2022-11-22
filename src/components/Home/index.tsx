import React from 'react';
// import Helmet from 'react-helmet';
import PostSection from './PostSection';
import Headline from './Headline';

const Home = ({ data }: any) => {
  console.log('data', data);
  // const siteTitle = site.siteMetadata.title;
  const posts = data.allMarkdownRemark.nodes;
  const postsSlugs = posts.slice(0, 3).map((post: any) => post.fields.slug);
  const filterPosts = (posts: any) =>
    posts
      .filter((post: any) => !postsSlugs.includes(post.fields.slug))
      .slice(0, 3);
  const technologyPosts = filterPosts(data.technology.nodes);
  const musicPosts = filterPosts(data.music.nodes);
  const otherPosts = filterPosts(data.other.nodes);

  return (
    <>
      {/* <Helmet title={siteTitle} /> */}
      <main>
        <Headline posts={posts} title="The Latest" />
        <PostSection posts={technologyPosts} title="Technology" />
        <PostSection posts={musicPosts} title="Music" />
        <PostSection posts={otherPosts} title="Musings" />
      </main>
    </>
  );
};

export default Home;
