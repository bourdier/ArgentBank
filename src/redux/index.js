import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './auth/reducer';
import thunk from 'redux-thunk';

const reducer = configureStore({
  reducer: {
    usersData: userSlice.reducer,
  },
  middleware: [thunk],
});

export default reducer;