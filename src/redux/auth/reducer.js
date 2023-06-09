import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  username: null,
  isLoggedIn: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'usersData',
  initialState: userInitialState,
  reducers: {
    setUsername: (state, action) => {
      const { email, username, isLoggedIn, token } = action.payload;
      state.email = email;
      state.username = username;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;