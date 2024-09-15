import { useRef } from 'react';
import { IconButtonStyled, SearchContainer, TextFieldStyled } from './search.styles';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  label?: string;
  onSearch?: (text: string) => void;
}

const SearchComponent = ({ label, onSearch }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    onSearch?.(inputRef.current?.value ?? '');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <TextFieldStyled inputRef={inputRef} label={label} variant="outlined" onKeyDown={handleKeyDown} />
      <IconButtonStyled onClick={handleSearch}>
        <SearchIcon />
      </IconButtonStyled>
    </SearchContainer>
  );
};

export default SearchComponent;
