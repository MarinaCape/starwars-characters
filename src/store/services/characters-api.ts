import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { characterResponseMapper } from './character.mapper';
import { CharacterList } from '../../models/character';
import { CharacterListResponse } from './character.model';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharacterList, { page: number }>({
      query: ({ page }) => `people?page=${page}`,
      transformResponse: (response: CharacterListResponse) => {
        return characterResponseMapper(response);
      },
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
