import React from 'react';
import Header from '../components/Header';

import { Container } from './styles';

const Template = ({ children }: JSX.ElementChildrenAttribute) => (
  <Container>
    <>
      <Header />
      {children}
    </>
  </Container>
);

export default Template;
