import { configureStore } from '@reduxjs/toolkit';
import { catApi } from '../services/catApi';
import { sharedLayoutSlice } from './sharedLayoutSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { votingViewSlice } from './votingViewSlice';

const persistConfig = {
  key: 'votings',
  storage,
};

export const store = configureStore({
  reducer: {
    [catApi.reducerPath]: catApi.reducer,
    [sharedLayoutSlice.name]: sharedLayoutSlice.reducer,
    [votingViewSlice.name]: persistReducer(
      persistConfig,
      votingViewSlice.reducer
    ),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(catApi.middleware),
});

export const persistor = persistStore(store);
