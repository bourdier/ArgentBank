import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    usersData: userReducer,
  },
  middleware: [thunk],
});

export default store;