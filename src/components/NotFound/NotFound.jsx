import { NotFoundText, NotFoundImg } from './NotFound.styled';
import notFoundImg from '../../img/not_foung_img.jpeg';

export const NotFound = () => {
  return (
    <>
      <NotFoundText>This page wasn't found</NotFoundText>
      <NotFoundImg src={notFoundImg} alt="" />
    </>
  );
};

export default NotFound;
