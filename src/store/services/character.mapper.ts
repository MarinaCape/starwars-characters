import { CharacterList, Gender, StarWarsMovies } from '../../models/character';
import { CharacterListResponse, CharacterResponse } from './character.model';

export const characterResponseMapper = (data: CharacterListResponse): CharacterList => ({
  ...data,
  characters: data.results.map((character: CharacterResponse) => ({
    ...character,
    id: extractIdFromUrl(character.url) ?? character.name,
    gender: character.gender as Gender,
    films: character.films.map((film: string) => episodeMap[Number(extractIdFromUrl(film))]),
  })),
});

const extractIdFromUrl = (url: string): string => {
  const urlSplit = url.split('/');
  return urlSplit[urlSplit.length - 2];
};

const episodeMap: { [key: number]: StarWarsMovies } = {
  1: StarWarsMovies.Episode1,
  2: StarWarsMovies.Episode2,
  3: StarWarsMovies.Episode3,
  4: StarWarsMovies.Episode4,
  5: StarWarsMovies.Episode5,
  6: StarWarsMovies.Episode6,
};
