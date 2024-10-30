import React from 'react';
import { Box, CircularProgress } from '@mui/material';
const Loader = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <CircularProgress />
      </Box>
    </React.Fragment>
  );
};

export default Loader;
