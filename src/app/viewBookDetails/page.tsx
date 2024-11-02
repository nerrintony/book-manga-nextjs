'use client';
import React, { useEffect } from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const BookDetails = () => {
  // Sample book object if data is not passed in
  const sampleBook = {
    title: 'Book Title',
    author: 'Author Name',
    description: 'This is a detailed description of the book. It covers the storyline and key aspects of the book.',
    genre: 'Genre',
    coverImage: 'https://via.placeholder.com/150', // Replace with actual image URL or path
  };

  const selectedBook = useSelector((state: RootState) => state.book);

  useEffect(() => {
    console.log(selectedBook, 'aaaaaaaaaaaaaaaaaaa');
  }, []);

  // Use passed-in book or default to sampleBook for demonstration
  // const selectedBook = sampleBook;

  return (
    <Container maxWidth="lg" sx={{ py: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height:'90vh' }}>
      <Card>
        <img
          src={selectedBook?.book?.imageLinks?.thumbnail} // Simplified conditional rendering
          alt="Book Cover"
          style={{ width: '260px', height: '200px', objectFit: 'contain' }} // Adjust width here
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {selectedBook.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            by {selectedBook?.book?.authors}
          </Typography>
          <Box my={2}>
            <Chip label={selectedBook?.book?.maturityRating} color="primary" />
          </Box>
          <Typography variant="body1" paragraph>
            {selectedBook?.book?.description}
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
    </Container>
  );
};

export default BookDetails;
