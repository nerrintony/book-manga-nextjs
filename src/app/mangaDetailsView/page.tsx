'use client';
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  Stack,
} from '@mui/material';
import { useSearchParams } from 'next/navigation';
import MangeVerseClient from '@/client/mangaverse.client';

const MangaDetailsCard = () => {
  const sampleBook = {
    title: 'Book Title',
    author: 'Author Name',
    description: 'This is a detailed description of the book. It covers the storyline and key aspects of the book.',
    genre: 'Genre',
    coverImage: 'https://via.placeholder.com/150', // Replace with actual image URL or path
  };

  const searchParams = useSearchParams();
  const mangaId = searchParams.get('id');

  interface MangaDetails {
    id: string;
    title: string;
    authors: [];
    genres: [];
    thumb: string;
    status: string;
    sub_title: string;
    summary: string;
  }

  const [mangaDetails, setMangaDetails] = useState<MangaDetails>();

  useEffect(() => {
    mangaId && getMangaDetails(mangaId);
  }, [searchParams]);

  const getMangaDetails = async (id: string) => {
    try {
      const response = await MangeVerseClient.getMangaDetails({ id: id });

      setMangaDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}
    >
      {mangaDetails && (
        <Card>
          <img
            src={mangaDetails.thumb} // Simplified conditional rendering
            alt="Book Cover"
            style={{ width: '260px', height: '200px', objectFit: 'contain' }} // Adjust width here
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {mangaDetails.title}
            </Typography>

            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              by
              {mangaDetails?.authors.length > 1 &&
                mangaDetails?.authors.map((author, i) => (
                  <Typography component="span" sx={{ ml: 2 }}>
                    {author},
                  </Typography>
                ))}
            </Typography>

            {/* <Box my={2}>
              <Chip label={mangaDetails?.genres} color="primary" />
            </Box> */}

            {/* Category Chips */}
            <Stack direction="row" spacing={1} sx={{ marginY: 2 }}>
              {mangaDetails?.genres.map((genre, index) => (
                <Chip key={index} label={genre} color="primary" variant="outlined" />
              ))}
            </Stack>
            <Typography variant="body1" paragraph>
              {mangaDetails?.summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large">
              Buy Now
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Add to Wishlist
            </Button>
          </CardActions>
        </Card>
      )}
    </Container>
  );
};

export default MangaDetailsCard;
