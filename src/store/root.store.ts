import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './services/characters-api';
import { paginationSlice } from './slices/pagination.slice';

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    pagination: paginationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
