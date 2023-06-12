import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  email: null,
  isLoggedIn: false,
  token: '',
  incorrect: false,
};

export const userSlice = createSlice({
  name: 'usersData',
  initialState: userInitialState,
  reducers: {
    setAuth: (state, action) => {
      const { email, isLoggedIn, token, incorrect } = action.payload;
      state.email = email;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
      state.incorrect = incorrect;
    },
  },
});

export const { setAuth } = userSlice.actions;
export default userSlice.reducer;