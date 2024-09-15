import { ButtonStyled, PaginationContainer, TypographyPageStyled } from './pagination.styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useAppDispatch } from '../../store/root.hooks';
import { nextPage, previusPage } from '../../store/slices/pagination.slice';

interface PaginationProps {
  page: number;
  next: boolean;
}

const PaginationComponent = ({ page, next }: PaginationProps) => {
  const dispatch = useAppDispatch();
  return (
    <PaginationContainer>
      <ButtonStyled
        disabled={page == 1}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => dispatch(previusPage())}
      >
        Previus
      </ButtonStyled>
      <TypographyPageStyled>Page {page}</TypographyPageStyled>
      <ButtonStyled
        disabled={!next}
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => dispatch(nextPage())}
      >
        Next
      </ButtonStyled>
    </PaginationContainer>
  );
};

export default PaginationComponent;
