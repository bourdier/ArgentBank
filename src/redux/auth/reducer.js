import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  email: null,
  isLoggedIn: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'usersData',
  initialState: userInitialState,
  reducers: {
    setAuth: (state, action) => {
      const { email, isLoggedIn, token } = action.payload;
      state.email = email;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;