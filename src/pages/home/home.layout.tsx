import { CircularProgress, Grid2, Typography } from '@mui/material';
import CharacterItemComponent from './components/character-item.component';
import { CharactersContainer, HomeContainer } from './home.styles';
import SearchComponent from '../../core/search/search.component';
import { useState } from 'react';
import { useGetCharactersQuery } from '../../store/services/characters-api';
import PaginationComponent from '../../core/pagination/pagination.component';
import { Character } from '../../models/character';
import { theme } from '../../App.styles';
import { useAppDispatch, useAppSelector } from '../../store/root.hooks';
import { resetPage, selectPage } from '../../store/slices/pagination.slice';

const HomeLayout = () => {
  const [searchText, setSearchText] = useState('');
  const page = useAppSelector(selectPage);
  const dispatch = useAppDispatch();
  const { isFetching, isError, data } = useGetCharactersQuery({ page: page });

  const filteredCharacters = () =>
    data?.characters?.filter((character: Character) =>
      character.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
    );

  const handleResetAll = () => {
    dispatch(resetPage());
    setSearchText('');
  };

  return (
    <HomeContainer>
      <Typography variant="h1">Star Wars Characters</Typography>
      <SearchComponent
        label="Search character..."
        onChange={setSearchText}
        onReset={handleResetAll}
        value={searchText}
      />
      {!!!searchText && <PaginationComponent page={page} next={!!data?.next} />}
      {isFetching && <CircularProgress sx={{ margin: theme.spacing(2) }} />}
      {isError && (
        <Typography sx={{ margin: theme.spacing(2) }} color="error">
          Something went wrong.
        </Typography>
      )}
      <CharactersContainer container spacing={3}>
        {filteredCharacters()?.map((character) => (
          <Grid2 size={6} key={character.id}>
            <CharacterItemComponent character={character} />
          </Grid2>
        ))}
      </CharactersContainer>
    </HomeContainer>
  );
};

export default HomeLayout;
