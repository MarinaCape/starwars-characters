import { Card, styled } from '@mui/material';

export const CardStyled = styled(Card)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  minWidth: '300px',
}));
