import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          boxSizing: 'border-box',
          overflowX: 'hidden',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h5' },
      },
      styleOverrides: {
        root: {
          background: '#082c75',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          background: '#1455eb',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#1455eb',
      contrastText: '#ffffff',
    },
    background: { default: '#111827' },
    secondary: {
      main: '#ffdb2d',
    },
    text: {
      primary: '#ffdb2d',
      secondary: '#ffffff',
    },
  },
  typography: {
    h1: {
      color: '#ffdb2d',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.5,
    },
    body2: {
      color: '#ffffff',
      fontWeight: 500,
      fontSize: '1.1rem',
    },
  },
});
