import { CardHeader, Grid2, Typography } from '@mui/material';
import { CardContentStyled, CardStyled } from './character-info.styles';
import { Character } from '../../../models/character';

interface CharacterInfoProps {
  character: Character;
}
const CharacterInfoComponent = ({ character }: CharacterInfoProps) => {
  return (
    <CardStyled>
      <CardHeader title={character.name} />
      <CardContentStyled>
        <Grid2 container spacing={3}>
          <Grid2 size={6}>
            <Typography>Gender: {character.gender}</Typography>
            <Typography>Birth year: {character.birth_year}</Typography>
            <Typography>Eye color: {character.eye_color}</Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography>Hair color: {character.hair_color}</Typography>
            <Typography>Height: {character.height} cm</Typography>
            <Typography>Mass: {character.mass} kg</Typography>
          </Grid2>
        </Grid2>
        <Typography>Films: {character.films.join(', ')}</Typography>
      </CardContentStyled>
    </CardStyled>
  );
};

export default CharacterInfoComponent;
