import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';

const BookDetails = () => {
  // Sample book object if data is not passed in
  const sampleBook = {
    title: 'Book Title',
    author: 'Author Name',
    description: 'This is a detailed description of the book. It covers the storyline and key aspects of the book.',
    genre: 'Genre',
    coverImage: 'https://via.placeholder.com/150', // Replace with actual image URL or path
  };

  // Use passed-in book or default to sampleBook for demonstration
  const selectedBook =  sampleBook;

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Card>
        <CardMedia
          component="img"
          alt={`${selectedBook.title} cover`}
          height="350"
          image={selectedBook.coverImage}
          title={selectedBook.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {selectedBook.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            by {selectedBook.author}
          </Typography>
          <Box my={2}>
            <Chip label={selectedBook.genre} color="primary" />
          </Box>
          <Typography variant="body1" paragraph>
            {selectedBook.description}
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
