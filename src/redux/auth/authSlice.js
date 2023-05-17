import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, fetchCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: { signUpError: null, logInError: null, otherError: null },
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = { signUpError: null, logInError: null, otherError: null };
};
const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error.otherError = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => handlePending(state))
      .addCase(logIn.pending, state => handlePending(state))
      .addCase(logOut.pending, state => handlePending(state))
      .addCase(fetchCurrentUser.pending, state => handlePending(state))

      .addCase(signUp.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error.signUpError = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error.logInError = action.payload;
      })
      .addCase(logOut.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(fetchCurrentUser.rejected, (state, action) =>
        handleRejected(state, action)
      )

      .addCase(signUp.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = { signUpError: null, logInError: null, otherError: null };
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = { signUpError: null, logInError: null, otherError: null };
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOut.fulfilled, state => {
        state.isRefreshing = false;
        state.error = { signUpError: null, logInError: null, otherError: null };
        state.isLoggedIn = false;
        state.user = { name: null, email: null, password: null };
        state.token = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = { signUpError: null, logInError: null, otherError: null };
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
