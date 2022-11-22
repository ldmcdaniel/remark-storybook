import React from 'react';

import Card from '../Card';
import {
  FeaturedPost,
  InitialContent,
  LatestPostList,
  MainTitle,
  SecondaryPosts,
} from './styles';

const Headline = ({ posts, title }: { posts: any; title: any }) => (
  <section>
    <InitialContent>
      <MainTitle>{title}</MainTitle>
      <LatestPostList>
        <FeaturedPost>
          <Card {...posts[0]} idx={0} />
        </FeaturedPost>
        <SecondaryPosts>
          <Card {...posts[1]} idx={1} />
          <Card {...posts[2]} idx={2} />
        </SecondaryPosts>
      </LatestPostList>
    </InitialContent>
  </section>
);

export default Headline;
