import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '../services/character/character.service';

export const useCharacter = () => {
  const { isLoading, data, isError } = useQuery({ queryKey: ['characters'], queryFn: getCharacters });

  return {
    isLoading,
    characters: data?.characters,
    isError,
  };
};
