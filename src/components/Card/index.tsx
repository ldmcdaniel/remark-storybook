import React from 'react';
import {} from 'prop-types';
import { Link } from 'gatsby';

import { BlogCard, BlogCardTitle } from './styles';

const Card = ({ frontmatter, fields, excerpt, idx }) => {
  const title = frontmatter.title || node.fields.slug;
  const image = frontmatter.image;
  return (
    <BlogCard key={idx}>
      <Link to={fields.slug}>{image && <img src={image} />}</Link>
      <Link to={fields.slug}>
        <BlogCardTitle>
          <h3>{title}</h3>
        </BlogCardTitle>
      </Link>
      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
    </BlogCard>
  );
};

Card.defaultProps = {};

Card.propTypes = {};

export default Card;
