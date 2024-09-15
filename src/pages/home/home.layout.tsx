import { Grid2 } from '@mui/material';
import { useCharacter } from '../../hooks/useCharacter';
import CharacterItemComponent from './components/character-item.component';
import { CharactersContainer, HomeContainer, TitleStyled } from './home.styles';
import SearchComponent from '../../core/search.component';

const HomeLayout = () => {
  const { characters, isLoading, isError } = useCharacter();

  return (
    <HomeContainer>
      <TitleStyled variant="h1">Star Wars Characters</TitleStyled>
      <SearchComponent label="Buscar..." />
      <CharactersContainer container spacing={3}>
        {characters?.map((character) => (
          <Grid2 size={6} key={character.id}>
            <CharacterItemComponent character={character} />
          </Grid2>
        ))}
      </CharactersContainer>
    </HomeContainer>
  );
};

export default HomeLayout;
