import React from 'react';

import { PostList, SecondaryContent, SectionTitle } from './styles';
import Card from '../Card';

interface Props {
  posts: Queries.BlogIndexQuery['allMarkdownRemark']['nodes'];
  title: string;
}

const PostSection = ({ posts, title }: Props) => (
  <section>
    <SecondaryContent>
      <SectionTitle>{title}</SectionTitle>
      <PostList>
        {posts.slice(0, 3).map((post) => (
          <Card {...post} />
        ))}
      </PostList>
    </SecondaryContent>
  </section>
);

export default PostSection;
