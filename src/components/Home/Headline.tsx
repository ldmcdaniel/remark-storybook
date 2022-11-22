import React from 'react';

import Card from '../Card';
import {
  FeaturedPost,
  InitialContent,
  LatestPostList,
  MainTitle,
  SecondaryPosts,
} from './styles';

interface Props {
  posts: Queries.BlogIndexQuery['allMarkdownRemark']['nodes'];
  title: string;
}

const Headline = ({ posts, title }: Props) => (
  <section>
    <InitialContent>
      <MainTitle>{title}</MainTitle>
      <LatestPostList>
        <FeaturedPost>
          <Card {...posts[0]} />
        </FeaturedPost>
        <SecondaryPosts>
          <Card {...posts[1]} />
          <Card {...posts[2]} />
        </SecondaryPosts>
      </LatestPostList>
    </InitialContent>
  </section>
);

export default Headline;
