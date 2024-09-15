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
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type Gender = 'Male' | 'Female' | 'unknown' | 'n/a';
