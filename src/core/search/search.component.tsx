import { IconButtonStyled, SearchContainer, TextFieldStyled } from './search.styles';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface SearchProps {
  label?: string;
  value?: string;
  onChange?: (text: string) => void;
  onReset?: () => void;
}

const SearchComponent = ({ label, value, onChange, onReset }: SearchProps) => {
  return (
    <SearchContainer>
      <TextFieldStyled label={label} variant="outlined" value={value} onChange={(e) => onChange?.(e.target.value)} />
      <IconButtonStyled onClick={onReset}>
        <RestartAltIcon />
      </IconButtonStyled>
    </SearchContainer>
  );
};

export default SearchComponent;
