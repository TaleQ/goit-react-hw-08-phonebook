import styled from 'styled-components';
import HomeBg from '../../img/home_bg.jpeg';

export const HomeWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 120px);
  padding: 20px;
  background-color: rgb(50 61 67);
  background-image: url(${HomeBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HomeBox = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  font-size: 16px;
  color: #fff;
  width: 80%;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    margin-left: 60px;
    width: 40%;
  }
`;

export const HomeTitle = styled.h2`
  font-family: 'Caveat', cursive;
  font-size: 46px;
  text-align: center;
  margin-bottom: 20px;
`;

export const HomeText = styled.p`
  margin-bottom: 10px;
`;

export const StartNowBtn = styled.button`
  margin: 10px auto;
  display: block;
  width: 150px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid transparent;
  color: #2160c4;
  &:hover {
    box-shadow: 8px 8px 24px -7px rgba(28, 33, 141, 1);
  }
`;
