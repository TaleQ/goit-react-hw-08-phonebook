import styled from 'styled-components';
import ContactsBg from '../../img/contacts_bg.jpeg';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 15px;
  background-color: rgb(0 4 13);
  background-image: url(${ContactsBg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  color: rgb(17 59 126);
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`;
export const ContactsBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const Thumb = styled.div`
  margin: 15px auto;
`;
