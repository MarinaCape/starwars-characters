import { Box, Grid2, styled } from '@mui/material';

export const HomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
});

export const CharactersContainer = styled(Grid2)(({ theme }) => ({
  margin: theme.spacing(3),
  maxWidth: '70%',
}));
