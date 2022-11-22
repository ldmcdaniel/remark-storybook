import styled, { createGlobalStyle } from 'styled-components';

export const NavBar = styled.div`
  height: 60px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  color: #0077be;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    315deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(65, 131, 196, 1) 25%,
    rgba(57, 205, 235, 0.9752275910364145) 75%
  );
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: rotateX(35deg), translateY(-50%);
    span {
      color: #66add8;
      &:nth-child(odd) {
        transform: skewY(15deg);
      }
      &:nth-child(even) {
        transform: skewY(-15deg);
        background-color: #f9f9f9;
        color: #3292cb;
      }
    }
  }

  > span {
    display: block;
    background-color: #fff;
    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
    @media (max-width: 767px) {
      width: 25px;
      height: 25px;
      line-height: 25px;
    }
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;
    box-shadow: 0 40px 50px rgba(0, 0, 0, 0.1);
    &:first-child {
      border-radius: 5px 0 0 5px;
    }
    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;
