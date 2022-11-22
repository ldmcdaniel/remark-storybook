import React from 'react';
import { Link } from 'gatsby';

import { BlogCard, BlogCardTitle } from './styles';

interface Props {
  excerpt: string | null;
  fields: { readonly slug: string | null } | null;
  frontmatter: {
    readonly date: string | null;
    readonly title: string | null;
    readonly image: string | null;
    readonly subject: readonly (string | null)[] | null;
  } | null;
}
const Card = ({ excerpt, fields, frontmatter }: Props) => (
  <BlogCard>
    <Link to={fields?.slug || ''}>
      {frontmatter?.image && <img src={frontmatter.image} />}
    </Link>
    <Link to={fields?.slug || ''}>
      <BlogCardTitle>
        <h3>{frontmatter?.title || fields?.slug}</h3>
      </BlogCardTitle>
    </Link>
    <p dangerouslySetInnerHTML={{ __html: excerpt || '' }} />
  </BlogCard>
);

export default Card;
