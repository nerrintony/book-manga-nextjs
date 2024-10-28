import { Box, Grid2, ImageList, ImageListItem, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/components/BookThumbnailCard/123.jpg';
import { Books, LatestBook } from '@/app/LatestBookType/LatestBook.type';

interface BookThumbnailCardProps {
  propsManga?: LatestBook; // Specify the type for propsManga
  propsBook?: Books;
}

const BookThumbnailCard: React.FC<BookThumbnailCardProps> = ({ propsManga, propsBook }) => {
  let imageSrc;
  if (propsManga) {
    // Check if propsManga has a thumbnail
    imageSrc = typeof propsManga.thumb === 'string' ? propsManga.thumb : logo.src;
  } else if (propsBook) {
    // Check if propsBook has an image link (modify as necessary)
    imageSrc = propsBook.volumeInfo.imageLinks?.thumbnail || logo.src; // Use logo.src if no thumbnail
  } else {
    imageSrc = logo.src; // Fallback to default logo if neither prop is provided
  }
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 300,
          height: 400,
          borderRadius: 3,
          bgcolor: '#acdedf',
          '&:hover': {
            bgcolor: '#ccdedf',
          },
        }}
      >
        <ImageList
          sx={{
            width: 300,
            height: 250,
            display: 'flex',
            justifyContent: 'center',
          }}
          variant="quilted"
          cols={4}
          rowHeight={100}
        >
          <ImageListItem sx={{ p: 2 }} cols={1} rows={1}>
            <img
              src={imageSrc} // Simplified conditional rendering
              alt="Book Cover"
              style={{ width: '260px', height: '200px', objectFit: 'contain' }} // Adjust width here
            />
          </ImageListItem>
        </ImageList>
        <Typography sx={{ ml: 3, display: 'flex', color: '#fa2a1a', fontWeight: 800 }}>
          {propsManga ? propsManga?.title : propsBook?.volumeInfo?.title}
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default BookThumbnailCard;
