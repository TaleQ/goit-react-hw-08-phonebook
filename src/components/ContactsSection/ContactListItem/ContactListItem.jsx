import { ContactItem, DeleteButton } from './ContactListItem.styled';
import { contactsSelectors } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Avatar } from '@mui/material';

export const ContactListItem = () => {
  const filtredContacts = useSelector(contactsSelectors.selectFiltredContacts);
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(deleteContact(e.target.id));
  };

  return filtredContacts.map(contact => (
    <ContactItem key={contact.id}>
      <Avatar sx={{ bgcolor: '#3A526A' }} />
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <DeleteButton id={contact.id} onClick={handleClick}>
        Delete
      </DeleteButton>
    </ContactItem>
  ));
};
