import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  width: 100vw;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: sticky;
  padding: 10px 40px 5px 40px;
  color: #fff;
  text-shadow: 2px 2px 2px #ccdcff;
  background-color: #3a526a;
  box-shadow: 0px 7px 18px -1px rgb(89 179 252);
  z-index: 1000;
  @media screen and (min-width: 768px) {
    padding: 10px 40px 5px 40px;
    font-size: 32px;
    flex-direction: row;
    justify-content: space-between;
    font-size: 32px;
  }
`;

export const Logo = styled.h1`
  font-family: 'Caveat', cursive;
  &:hover {
    color: #3399ff;
  }
`;
