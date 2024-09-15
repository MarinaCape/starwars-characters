import { CardContent, CardHeader, Typography } from '@mui/material';
import { Character } from '../../../models/character';
import { CardStyled } from './character-item.styles';
import { useNavigate } from 'react-router-dom';

interface CharacterItemProps {
  character: Character;
}

const CharacterItemComponent = ({ character }: CharacterItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/character', { state: character });
  };

  return (
    <CardStyled onClick={handleClick}>
      <CardHeader title={character.name} />
      <CardContent>
        <Typography variant="body2">Gender: {character.gender}</Typography>
      </CardContent>
    </CardStyled>
  );
};

export default CharacterItemComponent;
