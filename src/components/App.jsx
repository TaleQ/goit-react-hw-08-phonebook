import { Wrapper, Thumb } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const { isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Notify.failure('An error occured. Try again later.');
    }
  }, [error]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      {error && <p>{`Error: ${error}`}</p>}
      <h1>Phonebook</h1>
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
      {isLoading && <Loader />}
    </Wrapper>
  );
};
