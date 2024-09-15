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
          backgroundColor: '#111827',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
        },
      },
    },
  },
});
