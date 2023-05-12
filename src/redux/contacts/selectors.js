import { createSelector } from '@reduxjs/toolkit';

const selectIsLoading = store => store.contacts.isLoading;
const selectError = store => store.contacts.error;
const selectFilterValue = store => store.filter;
const selectContacts = store => store.contacts.items;
const selectFiltredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);

export const contactsSelectors = {
  selectIsLoading,
  selectError,
  selectFilterValue,
  selectContacts,
  selectFiltredContacts,
};
