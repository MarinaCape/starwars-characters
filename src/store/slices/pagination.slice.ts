import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../root.store';

export interface PaginationState {
  page: number;
}

const initialState: PaginationState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    nextPage: (state: PaginationState) => {
      state.page += 1;
    },
    previusPage: (state: PaginationState) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    resetPage: (state: PaginationState) => {
      state.page = 1;
    },
  },
});

export const selectPage = (state: RootState) => state.pagination.page;

export const { nextPage, previusPage, resetPage } = paginationSlice.actions;
export default paginationSlice.reducer;
