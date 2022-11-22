import React from 'react';
import { Link } from 'gatsby';

import { NavBar, Logo, GlobalStyles } from './styles';

const Header = () => (
  <NavBar>
    <GlobalStyles />
    <Link to="/">
      <Logo>
        <span>L</span>
        <span>I</span>
        <span>F</span>
        <span>E</span>
        <span></span>
        <span>I</span>
        <span>N</span>
        <span></span>
        <span>C</span>
        <span>O</span>
        <span>D</span>
        <span>E</span>
      </Logo>
    </Link>
  </NavBar>
);

export default Header;
