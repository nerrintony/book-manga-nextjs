"use client";

import { Box } from '@mui/material';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from '@/components/NavBar/NavBar';
import BookThumbnailCard from '@/components/BookThumbnailCard/BookThumbnailCard';

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Container maxWidth={'xl'}>
        <Box>aaaaaaaaaaaaaa</Box>
        <BookThumbnailCard />
      </Container>
    </React.Fragment>
  );
};

export default Home;
