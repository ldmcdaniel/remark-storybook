import React from 'react';
import PropTypes from 'prop-types';
import Bio from '../Bio';
import profilePic from '../lucas_mcdaniel.jpg';
import { rhythm } from '../../utils/typography';
import { PostList, SecondaryContent, SectionTitle } from './styles';

const Footer = (props) => (
  <section>
    <SecondaryContent>
      <SectionTitle>About Me</SectionTitle>
      <PostList>
        <img
          src={profilePic}
          alt={`Lucas McDaniel`}
          style={{ maxWidth: '33%' }}
        />
        <p style={{ maxWidth: '33%' }}>
          Husband, father, teacher, musician, avid gamer, nature enthusiast, and
          passionate about the human condition.
        </p>
        <p style={{ maxWidth: '33%' }}>
          Made with{' '}
          <a href="https://www.gatsbyjs.com/" target="_blank">
            Gatsby
          </a>
          {', '}
          <a href="https://unsplash.com/" target="_blank">
            Unsplash
          </a>
          {', and '}
          <a href="https://www.rebrandly.com/" target="_blank">
            Rebrandly
          </a>
          .
        </p>
      </PostList>
    </SecondaryContent>
  </section>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
