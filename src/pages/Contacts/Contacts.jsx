import { Wrapper, Thumb, ContactsBox } from './Contacts.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Notify } from 'notiflix';
import { authSelectors } from 'redux/auth/selectors';
import { ContactsSection } from 'components/ContactsSection/ContactsSection';

const Contacts = () => {
  const error = useSelector(contactsSelectors.selectError);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add('contacts-bg');

    return () => {
      document.body.classList.remove('contacts-bg');
    };
  }, []);

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
      <ContactsBox>
        <ContactForm />
        <ContactsSection />
      </ContactsBox>
    </Wrapper>
  ) : (
    <Thumb>Please log in to see the contacts list</Thumb>
  );
};

export default Contacts;
