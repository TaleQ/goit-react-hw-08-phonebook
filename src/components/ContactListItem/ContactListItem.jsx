import { ContactItem, DeleteButton } from './ContactListItem.styled';
import { contactsSelectors } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const ContactListItem = () => {
  const filtredContacts = useSelector(contactsSelectors.selectFiltredContacts);
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(deleteContact(e.target.id));
  };

  return filtredContacts.map(contact => (
    <ContactItem key={contact.id}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <DeleteButton id={contact.id} onClick={handleClick}>
        Delete
      </DeleteButton>
    </ContactItem>
  ));
};
