import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Grid2 } from '@mui/material';
import { useDispatch } from 'react-redux';
import { light, dark, switchNavIcons } from '@/store/navSlice';

export default function ButtonAppBar() {
  const dispatch = useDispatch();

  const [themeMode, setThemeMode] = useState('light');

  // Theme toggle function
  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    themeMode == 'dark' ? dispatch(light()) : dispatch(dark());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Grid2 sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Grid2 sx={{ display: 'flex' }}>
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                <Button color="inherit" onClick={() => dispatch(switchNavIcons('books'))}>
                  Books
                </Button>
              </Typography>
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                <Button color="inherit" onClick={() => dispatch(switchNavIcons('manga'))}>
                  Mangas
                </Button>
              </Typography>
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                <Button color="inherit" onClick={() => dispatch(switchNavIcons('news'))}>
                  News
                </Button>
              </Typography>
            </Grid2>
            <Grid2 sx={{}}>
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                <Button color="inherit" onClick={toggleTheme}>
                  Toggle Theme
                </Button>
              </Typography>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
