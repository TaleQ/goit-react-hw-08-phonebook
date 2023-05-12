import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp } from './operations';

const initialState = {
  user: { name: '', email: '', password: '' },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => handlePending(state))
      .addCase(logIn.pending, state => handlePending(state))
      .addCase(logOut.pending, state => handlePending(state))

      .addCase(signUp.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(logIn.rejected, (state, action) => handleRejected(state, action))
      .addCase(logOut.rejected, (state, action) =>
        handleRejected(state, action)
      )

      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false;
        state.user = { name: '', email: '', password: '' };
        state.token = '';
      });
  },
});

export const authReducer = authSlice.reducer;
