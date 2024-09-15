import { IconButton } from '@mui/material';
import { IconButtonStyled, SearchContainer, TextFieldStyled } from './search.styles';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchComponent = ({ label, onChange }: SearchProps) => {
  return (
    <SearchContainer>
      <TextFieldStyled label={label} variant="outlined" onChange={onChange} />
      <IconButtonStyled>
        <SearchIcon />
      </IconButtonStyled>
    </SearchContainer>
  );
};

export default SearchComponent;
