import { Wrapper, Thumb } from './Contacts.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Notify } from 'notiflix';
import { authSelectors } from 'redux/auth/selectors';

const Contacts = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const error = useSelector(contactsSelectors.selectError);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Notify.failure('An error occured. Try again later.');
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isLoggedIn ? (
    <Wrapper>
      {error && <p>{`Error: ${error}`}</p>}
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length ? <Filter /> : null}
      {contacts.length ? (
        <ContactList />
      ) : (
        <Thumb>
          <p>There are no contacts yet</p>
        </Thumb>
      )}
    </Wrapper>
  ) : (
    <Thumb>Please log in to see the contacts list</Thumb>
  );
};

export default Contacts;
