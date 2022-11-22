import React from 'react';
// import Helmet from 'react-helmet';
// import { DiscussionEmbed } from 'disqus-react';

// import Bio from '../Bio';
// import BlogDate from '../blog-date';
// import BlogNav from '../BlogNav';
import { Body, Content } from './styles';

const Post = (props: any) => {
  const {
    data: {
      markdownRemark: {
        frontmatter,
        html,
        id,
        fields: { slug },
      },
      site,
      next,
      previous,
    },
  } = props;
  const { image, title } = frontmatter;
  // const siteTitle = site.siteMetadata.title;
  // const siteUrl = site.siteMetadata.siteUrl;
  // const disqusConfig = {
  //   shortname: process.env.GATSBY_DISQUS_NAME,
  //   config: { identifier: id, title: siteTitle, url: `${siteUrl}${slug}` },
  // };
  return (
    <Body>
      <Content>
        <h1>{title}</h1>
        {image && <img src={image}></img>}
        {/* <BlogDate {...frontmatter} />
        <Helmet title={`${title} | ${siteTitle}`} /> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <hr />
        {/* <Bio /> */}
        {/* <BlogNav previous={previous} next={next} /> */}
        <hr />
        {/* <DiscussionEmbed {...disqusConfig} /> */}
      </Content>
    </Body>
  );
};

export default Post;
