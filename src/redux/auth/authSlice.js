import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, signUp, fetchCurrentUser } from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logOut.fulfilled, state => {
        state.isRefreshing = false;
        state.error = null;
        state.isLoggedIn = false;
        state.user = { name: null, email: null, password: null };
        state.token = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.error = null;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(
          signUp.pending,
          logIn.pending,
          logOut.pending,
          fetchCurrentUser.pending
        ),
        state => handlePending(state)
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          logIn.rejected,
          logOut.rejected,
          fetchCurrentUser.rejected
        ),
        (state, action) => handleRejected(state, action)
      );
  },
});

export const authReducer = authSlice.reducer;
