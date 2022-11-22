import React from 'react';
import Header from '../components/Header';

import { Container } from './styles';

const Template = (props: any) => (
  <Container>
    <Header {...props} />
    {props.children}
  </Container>
);

export default Template;
