import { CssBaseline, ThemeProvider } from '@mui/material';
import HomeLayout from './pages/home/home.layout';
import { Route, Routes } from 'react-router-dom';
import { theme } from './App.styles';
import DetailLayout from './pages/detail/detail.layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/character" element={<DetailLayout />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
