import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { authSelectors } from 'redux/auth/selectors';

export const UserMenu = () => {
  const { email } = useSelector(authSelectors.selectUser);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div>
      {email && <p>{email}</p>}
      <NavLink to="/contacts">Contacts</NavLink>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
