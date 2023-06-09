import { createSlice } from '@reduxjs/toolkit';

export const userInitialState = {
  username: null,
  isLoggedIn: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;