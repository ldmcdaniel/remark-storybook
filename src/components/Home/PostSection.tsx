import React from 'react';
import PropTypes from 'prop-types';

import { PostList, SecondaryContent, SectionTitle } from './styles';
import Card from '../Card';

const PostSection = ({ posts, title }) => (
  <section>
    <SecondaryContent>
      <SectionTitle>{title}</SectionTitle>
      <PostList>
        {posts.slice(0, 3).map((post, idx) => (
          <Card {...post} idx={idx} />
        ))}
      </PostList>
    </SecondaryContent>
  </section>
);

PostSection.defaultProps = {
  musicPosts: [],
};

PostSection.propTypes = {
  musicPosts: PropTypes.array,
};

export default PostSection;
