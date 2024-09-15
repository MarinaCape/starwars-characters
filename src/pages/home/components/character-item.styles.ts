import { Card, CardContent, styled } from '@mui/material';

export const CardStyled = styled(Card)(({ theme }) => ({
  background: '#082c75',
  color: '#ffdb2d',
  minWidth: '100px',
}));

export const CardContentStyled = styled(CardContent)(({ theme }) => ({
  background: '#1455eb',
  color: '#ccdbf1',
}));
