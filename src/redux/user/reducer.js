import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    username: null,
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  }
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;