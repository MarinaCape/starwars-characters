export interface CharacterList {
  count: number;
  next: string;
  previous: string;
  characters: Character[];
}

export interface Character {
  id: string;
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: StarWarsMovies[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type Gender = 'Male' | 'Female' | 'unknown' | 'n/a';

export enum StarWarsMovies {
  Episode1 = 'The Phantom Menace',
  Episode2 = 'Attack of the Clones',
  Episode3 = 'Revenge of the Sith',
  Episode4 = 'A New Hope',
  Episode5 = 'The Empire Strikes Back',
  Episode6 = 'Return of the Jedi',
}
