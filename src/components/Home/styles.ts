import styled from 'styled-components';

import { Content } from '../Post/styles';

export const InitialContent = styled(Content)`
  padding: calc(60px + 2rem) 2rem 0;
`;
export const SecondaryContent = styled(Content)`
  padding: 4.5rem 2rem 0;
`;

export const LatestPostList = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const PostList = styled(LatestPostList)`
  @media (max-width: 767px) {
    & > div {
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      margin-bottom: 2rem;
    }
    & > div:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
  @media (min-width: 768px) {
    & > div {
      width: 33.3333%;
      padding: 0 0.66rem;
    }
    & > div:first-child {
      padding: 0 1.33rem 0 0;
    }
    & > div:last-child {
      padding: 0 0 0 1.33rem;
    }
  }
  & > div > p {
    display: none;
  }
`;

export const FeaturedPost = styled.div`
  & > div > a > div > h3 {
    font-size: 2.125rem;
  }
  @media (max-width: 767px) {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    & > div > a > div > h3 {
      font-size: 1.3125rem;
    }
    & > div > p {
      display: none;
    }
  }
  @media (min-width: 768px) {
    flex: 0 0 60%;
    max-width: calc(60% - 1.5rem);
    padding-right: 1.5rem;
  }
  @media (min-width: 992px) {
    flex: 0 0 66.66%;
    max-width: calc(66.66% - 1.5rem);
    padding-right: 1.5rem;
  }
`;

export const SecondaryPosts = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 40%;
    max-width: calc(40% - 1.5rem);
    padding-left: 1.5rem;
  }
  @media (min-width: 992px) {
    flex: 0 0 33.33%;
    max-width: calc(33.33% - 1.5rem);
    padding-left: 1.5rem;
  }
  & > div:first-of-type {
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    padding-bottom: 1rem;
  }
  & > div > p {
    display: none;
  }
`;

export const SectionTitle = styled.h2`
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  margin-top: 0;
  font-size: 2.125rem;
  @media (max-width: 767px) {
    font-size: 1.625rem;
  }
`;

export const MainTitle = styled(SectionTitle)`
  @media (max-width: 767px) {
    display: none;
  }
`;
