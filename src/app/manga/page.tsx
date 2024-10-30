'use client';

import { Box, Grid2 } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from '@/components/NavBar/NavBar';
import BookThumbnailCard from '@/components/BookThumbnailCard/BookThumbnailCard';
import React, { useEffect, useState } from 'react';
import MangeVerseClient from '@/client/mangaverse.client';
import { LatestBook } from '@/LatestBookType/LatestBook.type';

const Manga = () => {
  const [latestManga, setLatestManga] = useState<LatestBook[]>([]);

  useEffect(() => {
    getBookDetails();
  }, []);
  const getBookDetails = async () => {
    const options = {
      page: '1',
      genres: 'Comedy,Fantasy',
      nsfw: 'true',
      type: 'all',
    };
    try {
      const response = await MangeVerseClient.getLatestManga(options);
      setLatestManga(response?.data?.data);

    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Container maxWidth={'xl'} sx={{ width: '100%' }}>
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          <Grid2 container spacing={4}>
            {latestManga?.map((manga, index) => (
              <React.Fragment key={manga.id}>
                <BookThumbnailCard propsManga={manga} />
              </React.Fragment>
            ))}
          </Grid2>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Manga;
