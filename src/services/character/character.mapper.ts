import { CharacterList, Gender } from '../../models/character';
import { CharacterListResponse } from './character.model';

export const characterResponseMapper = (data: CharacterListResponse): CharacterList => ({
  ...data,
  characters: data.results.map((item) => ({
    ...item,
    id: extractIdFromUrl(item.url) ?? item.name,
    gender: item.gender as Gender,
  })),
});

const extractIdFromUrl = (url: string): string => {
  const urlSplit = url.split('/');
  return urlSplit[urlSplit.length - 2];
};
