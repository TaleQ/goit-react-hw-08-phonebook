import { contactsSelectors } from 'redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { StyledSection, Thumb } from './ContactsSection.styled';

export const ContactsSection = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);

  return (
    <StyledSection>
      <h2>Contacts</h2>
      {contacts.length ? <Filter /> : null}
      {contacts.length ? (
        <ContactList />
      ) : (
        <Thumb>
          <p>There are no contacts yet</p>
        </Thumb>
      )}
    </StyledSection>
  );
};
