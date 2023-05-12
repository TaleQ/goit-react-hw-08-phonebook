import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://645a252865bd868e93123683.mockapi.io/api/contacts/',
// });
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
