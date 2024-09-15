import { Box, Grid2, styled, Typography } from '@mui/material';

export const HomeContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  background: '#121723',
  color: '#f3f4f6',
  boxSizing: 'border-box',
});

export const CharactersContainer = styled(Grid2)({
  margin: '2.7rem',
  maxWidth: '70%',
});

export const TitleStyled = styled(Typography)({
  fontWeight: 700,
  fontSize: '3.5rem',
  lineHeight: 1.5,
  color: '#ffdb2d',
});
