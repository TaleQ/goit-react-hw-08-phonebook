import { useSelector } from 'react-redux';
import { selectFiltredContacts } from 'redux/selectors';
import { StyledContactList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);

  return filtredContacts.length ? (
    <StyledContactList>
      <ContactListItem />
    </StyledContactList>
  ) : (
    <p>There are no contacts with such a name</p>
  );
};
