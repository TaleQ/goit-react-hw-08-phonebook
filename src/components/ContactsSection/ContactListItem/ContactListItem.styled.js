import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  align-items: center;
  font-size: 26px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const DeleteButton = styled.button`
  width: 65px;
  background-color: #ffffff;
  border: 1px solid #2160c4;
  color: #2160c4;
  font-size: 16px;
  &:active {
    background-color: #2160c4;
    color: #ffffff;
  }
`;
