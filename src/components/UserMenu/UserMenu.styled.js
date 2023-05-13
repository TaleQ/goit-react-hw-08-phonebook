import styled from 'styled-components';

export const UserMenuBox = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  color: #fff;
`;

export const LogOutBtn = styled.button`
  width: 150px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid transparent;
  color: #2160c4;
  &:hover {
    box-shadow: 8px 8px 24px -7px rgba(28, 33, 141, 1);
  }
`;
