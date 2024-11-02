// 'use client';
// import React, { useState } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import NavBar from '@/components/NavBar/NavBar';
// import BookListing from '@/components/book/BookListing';
// import { createContext } from 'react';
// import { Button } from '@mui/material';
// const Home = () => {
//   const [theme, setTheme] = useState('light');

//   const ThemeContext = createContext('');

//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <NavBar />
//       <BookListing />
//       <Button
//         color={theme == 'dark' ? 'error' : 'success'}
//         variant="contained"
//         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//       >
//         Toggle theme
//       </Button>
//     </React.Fragment>
//   );
// };

// export default Home;

'use client';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from '@/components/NavBar/NavBar';
import BookListing from '@/components/book/BookListing';
import MangaListing from '@/components/manga/MangaListing';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Home = () => {
  const theme = useSelector((state: RootState) => state.nav.theme);
  const navIcons = useSelector((state: RootState) => state.nav.navIcons);

  // Define light and dark themes
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: { main: '#1976d2' },
      background: { default: '#f5f5f5' },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#bb86fc' },
      background: { default: '#303030' },
    },
  });

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavBar />
      {navIcons == 'books' && <BookListing />}
      {navIcons == 'manga' && <MangaListing />}
    </ThemeProvider>
  );
};

export default Home;
