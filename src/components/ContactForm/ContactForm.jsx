import { useState } from 'react';
import {
  StyledForm,
  FormLabel,
  FormInput,
  FormButton,
  ContactFormWrapper,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from 'redux/contacts/operations';
import { contactsSelectors } from 'redux/contacts/selectors';
import { Confirm } from 'notiflix';
import { nanoid } from 'nanoid';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectContacts);

  const clearForm = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isContactExists = contacts.some(
      existingContact => existingContact.name === name
    );
    if (isContactExists) {
      Confirm.show(
        `${name} is already in contacts`,
        "Would you like to update this contact's number?",
        'Yes',
        'No',
        () => {
          const index = contacts.findIndex(contact => contact.name === name);
          const updatedContact = {
            id: contacts[index].id,
            name: contacts[index].name,
            number: number,
          };
          dispatch(updateContact(updatedContact));
        },
        () => {},
        {
          titleColor: 'rgb(17 59 126)',
          okButtonBackground: 'rgb(17 59 126)',
        }
      );
      clearForm();
      return;
    }
    dispatch(addContact({ name, number }));
    clearForm();
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const buttonText = 'Add contact';

  return (
    <ContactFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleNameChange}
            id={nameInputId}
            required
          />
        </FormLabel>
        <FormLabel htmlFor={numberInputId}>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={numberInputId}
            value={number}
            onChange={handleNumberChange}
            required
          />
        </FormLabel>
        <FormButton type="submit">{buttonText.toUpperCase()}</FormButton>
      </StyledForm>
    </ContactFormWrapper>
  );
};
