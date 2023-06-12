import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './auth/reducer';
import { profileSlice } from './profile/reducer';
import { errorSlice } from './error/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['errors'],
};

const rootReducer = combineReducers({
  usersData: userSlice.reducer,
  profileData: profileSlice.reducer,
  errors: errorSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

export const persistor = persistStore(store);

export const clearPersistedState = () => {
  persistor.purge();
};