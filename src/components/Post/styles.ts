import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle``;

export const Body = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const Content = styled.div`
  padding: calc(60px + 2rem) 2rem;
  margin: auto;
  max-width: 1165px;
  hr {
    margin-bottom: 36px;
  }
  img {
    margin-bottom: 0;
    width: 100%;
  }
`;
