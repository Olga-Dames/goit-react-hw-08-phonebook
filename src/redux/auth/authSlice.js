import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrentUser } from '../auth/operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    [login.rejected](state, action) {
      state.isLoggedIn = false;
    },
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [logout.rejected](state, action) {
      state.isLoggedIn = true;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [getCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
