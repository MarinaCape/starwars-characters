import { Box, IconButton, styled, TextField } from '@mui/material';

export const SearchContainer = styled(Box)(({ theme }) => ({
  minWidth: '70%',
  marginTop: theme.spacing(3),
  display: 'flex',
}));

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#ffdb2d', // Color de fondo
  margin: theme.spacing(0, 2),
  color: 'black', // Color del ícono
  '&:hover': {
    backgroundColor: '#ffdb2d', // Color de fondo al hacer hover
  },
  borderRadius: '8px', // Puedes ajustar el radio del borde
  padding: theme.spacing(2), // Espaciado interno para que el fondo se vea más grande
}));

export const TextFieldStyled = styled(TextField)({
  flexGrow: 1,
  background: '#242b37',
  '& .MuiInputBase-input': {
    color: '#969da8', // Color del texto
    '&::placeholder': {
      color: '#8c939e', // Color del placeholder
      opacity: 1, // Controlar opacidad (si es necesario)
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#969da8', // Label cuando está enfocado
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#5e646f', // Borde cuando no está enfocado
    },
    '&:hover fieldset': {
      border: '2px solid #7F8590', // Borde al pasar el mouse
    },
    '&.Mui-focused fieldset': {
      border: '2px solid #7F8590', // Borde cuando está enfocado
    },
    '& .MuiInputBase-input::placeholder': {
      color: 'red', // Color del placeholder globalmente
      opacity: 1, // Opacidad del placeholder
    },
  },
  '& .MuiInputLabel-root': {
    color: '#8c939e',
  },
});
