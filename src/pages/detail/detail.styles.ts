import { Box, Button, styled, Typography } from '@mui/material';

export const DetailContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3),
}));

export const TitleStyled = styled(Typography)({
  fontWeight: 700,
  fontSize: '3.5rem',
  lineHeight: 1.5,
});

export const ButtonBackStyled = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  backgroundColor: '#2e3949',
  color: '#e1e9f4',
}));
