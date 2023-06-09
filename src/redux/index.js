import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userSlice } from './auth/reducer';
import logger from 'redux-logger'
// import thunk from 'redux-thunk';

const reducer = combineReducers({
  usersData: userSlice.reducer,
});

const middleware = [...getDefaultMiddleware(), logger]

export default configureStore({
  reducer, 
  middleware
})