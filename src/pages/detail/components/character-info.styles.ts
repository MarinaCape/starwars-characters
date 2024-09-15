import { Card, CardContent, styled } from '@mui/material';

export const CardStyled = styled(Card)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  background: '#082c75',
  color: '#ffdb2d',
  minWidth: '300px',
}));

export const CardContentStyled = styled(CardContent)({
  background: '#1455eb',
  color: '#ccdbf1',
});
