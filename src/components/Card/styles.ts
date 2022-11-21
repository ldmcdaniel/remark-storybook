import styled from 'styled-components';

export const BlogCard = styled.div`
  background: #fdfdfd;
  margin-bottom: 1rem;
  img {
    width: 100%;
    margin-bottom: 0;
  }

  a {
    color: inherit;

    img {
      overflow: hidden;
    }

    p {
      margin: 0;
      padding: 1rem 0;
    }
  }
`;

export const BlogCardTitle = styled.div`
  padding: 1rem 0;
  h3 {
    margin: 0;
    font-size: 1.3125rem;
  }
`;
