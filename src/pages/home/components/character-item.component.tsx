import { CardHeader, Typography } from '@mui/material';
import { Character } from '../../../models/character';
import { CardContentStyled, CardStyled } from './character-item.styles';
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
      <CardContentStyled>
        <Typography variant="body1">Gender: {character.gender}</Typography>
      </CardContentStyled>
    </CardStyled>
  );
};

export default CharacterItemComponent;
