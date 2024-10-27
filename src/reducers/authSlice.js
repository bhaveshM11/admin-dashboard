import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    authToken: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.authToken = action.payload.authToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.authToken = null;
    },
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUserData } = authSlice.actions;
export default authSlice.reducer;