import styled from 'styled-components';

export const UserMenuBox = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  color: #fff;
`;

export const UserMail = styled.p`
  margin: 0;
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
