import { NavLink } from 'react-router-dom';
import { NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        {/* <li>
          <NavLink to="/">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </NavList>
    </nav>
  );
};
