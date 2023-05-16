import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { params } from 'components/ToastParams';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchall',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(error.message, params);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success(`Contact was successfully added!`, params);
      return response.data;
    } catch (error) {
      toast.error(error.message, params);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success(`Contact was successfully removed!`, params);
      return response.data;
    } catch (error) {
      toast.error(error.message, params);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error(error.message, params);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
