import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { authSelectors } from 'redux/auth/selectors';
import { UserMenuBox, LogOutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const { email } = useSelector(authSelectors.selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserMenuBox>
      {email && <p>{email}</p>}
      <LogOutBtn onClick={handleClick}>Logout</LogOutBtn>
    </UserMenuBox>
  );
};
