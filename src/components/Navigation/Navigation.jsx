import { NavLink } from 'react-router-dom';
import { NavBox, NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavBox>
      <NavList>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </NavList>
    </NavBox>
  );
};
