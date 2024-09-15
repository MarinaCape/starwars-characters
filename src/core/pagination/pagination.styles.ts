import { Box, Button, styled, Typography } from '@mui/material';

export const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minWidth: '70%',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#ffdb2d',
  marginTop: theme.spacing(4),
}));

export const TypographyPageStyled = styled(Typography)({
  fontSize: '1.2rem',
});

export const ButtonStyled = styled(Button)({
  '&.Mui-disabled': {
    backgroundColor: 'gray',
    color: 'lightgray',
    cursor: 'not-allowed',
  },
});
