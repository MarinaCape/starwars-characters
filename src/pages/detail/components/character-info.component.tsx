import { CardContent, CardHeader, Grid2, Typography } from '@mui/material';
import { CardStyled } from './character-info.styles';
import { Character } from '../../../models/character';

interface CharacterInfoProps {
  character: Character;
}
const CharacterInfoComponent = ({ character }: CharacterInfoProps) => {
  return (
    <CardStyled>
      <CardHeader title={character.name} />
      <CardContent>
        <Grid2 container spacing={3}>
          <Grid2 size={6}>
            <Typography variant="body2">Gender: {character.gender}</Typography>
            <Typography variant="body2">Birth year: {character.birth_year}</Typography>
            <Typography variant="body2">Eye color: {character.eye_color}</Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography variant="body2">Hair color: {character.hair_color}</Typography>
            <Typography variant="body2">Height: {character.height} cm</Typography>
            <Typography variant="body2">Mass: {character.mass} kg</Typography>
          </Grid2>
        </Grid2>
        <Typography variant="body2">Films: {character.films.join(', ')}</Typography>
      </CardContent>
    </CardStyled>
  );
};

export default CharacterInfoComponent;
