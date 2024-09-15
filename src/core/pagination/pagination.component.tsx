import { ButtonStyled, PaginationContainer, TypographyPageStyled } from './pagination.styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface PaginationProps {
  page: number;
  next: boolean;
  onPageChange: (page: number) => void;
}

const PaginationComponent = ({ page, onPageChange, next }: PaginationProps) => {
  return (
    <PaginationContainer>
      <ButtonStyled
        disabled={page == 1}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => onPageChange(page - 1)}
      >
        Previus
      </ButtonStyled>
      <TypographyPageStyled>Page {page}</TypographyPageStyled>
      <ButtonStyled
        disabled={!next}
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </ButtonStyled>
    </PaginationContainer>
  );
};

export default PaginationComponent;
