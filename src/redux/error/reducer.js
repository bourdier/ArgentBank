import { createSlice } from '@reduxjs/toolkit';

export const errorInitialState = {
  incorrect: false,
  notAllowed: false,
};

export const errorSlice = createSlice({
  name: 'errors',
  initialState: errorInitialState,
  reducers: {
    setError: (state, action) => {
      const { incorrect, notAllowed } = action.payload;
      state.incorrect = incorrect;
      state.notAllowed = notAllowed;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;