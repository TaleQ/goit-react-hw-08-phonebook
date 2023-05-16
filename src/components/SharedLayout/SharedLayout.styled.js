import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  height: 150px;
  position: sticky;
  padding: 10px 40px 5px 40px;
  color: #fff;
  text-shadow: 2px 2px 2px #ccdcff;
  background-color: #3a526a;
  font-size: 32px;
  box-shadow: 0px 7px 18px -1px rgb(89 179 252);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-family: 'Caveat', cursive;
  &:hover {
    color: #3399ff;
  }
`;
