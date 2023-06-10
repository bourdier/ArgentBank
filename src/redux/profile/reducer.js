import { createSlice } from '@reduxjs/toolkit';

export const profileInitialState = {
  username: null,
  firstname: null,
  lastname: null,
};

export const profileSlice = createSlice({
  name: 'profileData',
  initialState: profileInitialState,
  reducers: {
    setProfile: (state, action) => {
      const { username, firstname, lastname } = action.payload;
      state.username = username;
      state.firstname = firstname;
      state.lastname = lastname;
    }
  }
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;