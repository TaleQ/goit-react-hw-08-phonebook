import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// FetchContacts
const fetchContactsPayloadCreator = async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  fetchContactsPayloadCreator
);

// AddContact
const addContactPayloadCreator = async (contactData, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contactData);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  addContactPayloadCreator
);

// DeleteContact
const deleteContactPayloadCreator = async (contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}/`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  deleteContactPayloadCreator
);

// UpdateContact
const updateContactPayloadCreator = async (updatedContact, thunkAPI) => {
  const contactId = updatedContact.id;
  const contactData = {
    name: updatedContact.name,
    number: updatedContact.number,
  };
  try {
    const response = await axios.patch(`/contacts/${contactId}/`, contactData);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  updateContactPayloadCreator
);
