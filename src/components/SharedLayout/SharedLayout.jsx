import { Outlet, NavLink } from 'react-router-dom';
import { Header } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/selectors';
import { authSelectors } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  const isLoading = useSelector(contactsSelectors.selectIsLoading);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <Header>
        <NavLink to="/">
          <h1>Phonebook</h1>
        </NavLink>
        {isLoggedIn ? <UserMenu /> : <Navigation />}
      </Header>
      <main>
        {(isLoading || isRefreshing) && <Loader />}
        <Outlet />
      </main>
    </>
  );
};
