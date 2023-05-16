import styled from 'styled-components';
import ContactsBg from '../../img/contacts_bg.jpeg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 40px;
  background-color: rgb(0 4 13);
  background-image: url(${ContactsBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: rgb(17 59 126);
`;
export const ContactsBox = styled.div`
  display: flex;
  width: 100%;
  gap: 5%;
`;

export const Thumb = styled.div`
  margin: 15px auto;
`;
