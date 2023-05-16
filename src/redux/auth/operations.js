import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { params } from 'components/ToastParams';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthToken(response.data.token);
      toast.success(
        `User ${response.data.user.name} was successfully registered`,
        params
      );
      return response.data;
    } catch (error) {
      toast.error(error.message, params);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthToken(response.data.token);
      toast.success(`Welcome, ${response.data.user.name}!`, params);
      return response.data;
    } catch (error) {
      toast.error(error.message, params);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    clearAuthToken();
    toast.success(`See you soon!`, params);
    return response.data;
  } catch (error) {
    toast.error(error.message, params);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrent',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No chance to find this user');
    }
    try {
      setAuthToken(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
