import { Box, IconButton, styled, TextField } from '@mui/material';

export const SearchContainer = styled(Box)(({ theme }) => ({
  minWidth: '70%',
  marginTop: theme.spacing(3),
  display: 'flex',
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  marginLeft: theme.spacing(2),
  color: 'black',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  borderRadius: '8px',
  padding: theme.spacing(2),
}));

export const TextFieldStyled = styled(TextField)({
  flexGrow: 1,
  background: '#242b37',
  '& .MuiInputBase-input': {
    color: '#969da8',
    '&::placeholder': {
      color: '#8c939e',
      opacity: 1,
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#969da8',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#5e646f',
    },
    '&:hover fieldset': {
      border: '2px solid #7F8590',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #7F8590',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#8c939e',
  },
});
