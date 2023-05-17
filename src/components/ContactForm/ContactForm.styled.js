import styled from 'styled-components';

export const ContactFormWrapper = styled.div`
  flex-basis: 290px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    flex-basis: 40%;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid #2160c4;
`;

export const FormLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  font-size: 26px;
`;

export const FormInput = styled.input`
  width: 70%;
  margin-top: 5px;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 10px;
  }
`;

export const FormButton = styled.button`
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  background-color: #2160c4;
  border: 1px solid transparent;
  color: #ffffff;
  &:hover {
    box-shadow: 8px 8px 24px -7px rgba(28, 33, 141, 1);
  }
`;
