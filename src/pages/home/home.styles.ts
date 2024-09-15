import { Box, Grid2, styled, Typography } from '@mui/material';

export const HomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  background: '#121723',
  color: '#f3f4f6',
});

export const CharactersContainer = styled(Grid2)(({ theme }) => ({
  margin: theme.spacing(3),
  maxWidth: '70%',
}));

export const TitleStyled = styled(Typography)({
  fontWeight: 700,
  fontSize: '3.5rem',
  lineHeight: 1.5,
  color: '#ffdb2d',
});
