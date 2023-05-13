import styled from 'styled-components';

export const NavBox = styled.nav`
  margin-left: auto;
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  color: #fff;

  a {
    &:hover {
      color: #3399ff;
    }
  }
`;
