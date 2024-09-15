import { CardHeader, Typography } from '@mui/material';
import { Character } from '../../../models/character';
import { CardContentStyled, CardStyled } from './character-item.styles';

interface CharacterItemProps {
  character: Character;
}

const CharacterItemComponent = ({ character }: CharacterItemProps) => {
  return (
    <CardStyled>
      <CardHeader title={character.name} />
      <CardContentStyled>
        <Typography variant="body1">Gender: {character.gender}</Typography>
      </CardContentStyled>
    </CardStyled>
  );
};

export default CharacterItemComponent;
