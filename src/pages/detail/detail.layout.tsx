import { useLocation } from 'react-router-dom';
import { Character } from '../../models/character';
import { ButtonBackStyled, DetailContainer, TitleStyled } from './detail.styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CharacterInfoComponent from './components/character-info.component';
import { useNavigate } from 'react-router-dom';

const DetailLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const character = (location.state as Character) || {};

  const handleBack = () => {
    navigate('/');
  };
  return (
    <DetailContainer>
      <ButtonBackStyled startIcon={<ArrowBackIosIcon />} onClick={handleBack}>
        Return to list
      </ButtonBackStyled>
      <CharacterInfoComponent character={character} />
    </DetailContainer>
  );
};

export default DetailLayout;
