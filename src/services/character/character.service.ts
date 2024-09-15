import { CharacterList } from '../../models/character';
import { Endpoints } from '../core/http.endpoints';
import { httpRequest } from '../core/http.service';
import { characterResponseMapper } from './character.mapper';
import { CharacterListResponse } from './character.model';

export const getCharacters = async (): Promise<CharacterList> => {
  const response = await httpRequest<CharacterListResponse>({
    method: 'get',
    url: Endpoints.characters,
  });
  return characterResponseMapper(response);
};
