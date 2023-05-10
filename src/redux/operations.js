import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://645a252865bd868e93123683.mockapi.io/api/contacts/',
});

// FetchContacts
const fetchContactsPayloadCreator = async (_, thunkAPI) => {
  try {
    const response = await instance.get('');
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
    const response = await instance.post('', contactData);
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
    const response = await instance.delete(`${contactId}/`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  deleteContactPayloadCreator
);
