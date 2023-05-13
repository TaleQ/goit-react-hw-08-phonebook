import { createSlice } from '@reduxjs/toolkit';
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
      .addCase(signUp.pending, state => handlePending(state))
      .addCase(logIn.pending, state => handlePending(state))
      .addCase(logOut.pending, state => handlePending(state))
      .addCase(fetchCurrentUser.pending, state => handlePending(state))

      .addCase(signUp.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(logIn.rejected, (state, action) => handleRejected(state, action))
      .addCase(logOut.rejected, (state, action) =>
        handleRejected(state, action)
      )
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        handleRejected(state, action);
      })

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
      });
  },
});

export const authReducer = authSlice.reducer;
