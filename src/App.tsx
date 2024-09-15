import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import HomeLayout from './pages/home/home.layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from './App.styles';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeLayout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
