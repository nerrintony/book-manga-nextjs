import { Box, Grid2, ImageList, ImageListItem, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/components/BookThumbnailCard/123.jpg';
import { Books, LatestBook, VolumeInfo } from '@/LatestBookType/LatestBook.type';
import { useDispatch, useSelector } from 'react-redux';
import { bookData } from '@/store/bookDetailsSlice';
import { useRouter } from 'next/navigation';

interface BookThumbnailCardProps {
  propsManga?: LatestBook; // Specify the type for propsManga
  propsBook?: Books;
}

const BookThumbnailCard: React.FC<BookThumbnailCardProps> = ({ propsManga, propsBook }) => {
  const router = useRouter();

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
  const dispatch = useDispatch();

  const handleBookClick = () => {
    if (propsBook) {
      let bookInfo: VolumeInfo = {
        title: propsBook.volumeInfo.title,
        authors: propsBook.volumeInfo.authors, // Ensure you map correctly based on Books structure
        description: propsBook.volumeInfo.description,
        imageLinks: propsBook.volumeInfo.imageLinks,
        maturityRating: propsBook.volumeInfo.maturityRating,
        previewLink: propsBook.volumeInfo.previewLink,
        subtitle: propsBook.volumeInfo.subtitle,
        // Map any additional properties if necessary
      };

      dispatch(bookData(bookInfo)); // Dispatch the mapped book info
      router.push(`/viewBookDetails?title=${propsBook?.volumeInfo.title.slice(0, 10)}`);
    } else if (propsManga) {
      let mangaInfo: LatestBook = {
        id: propsManga.id,
        title: propsManga.title,
        authors: propsManga.authors, // Ensure you map correctly based on Books structure
        description: propsManga.summary,
        thumb: propsManga.thumb,
        status: propsManga.status,
        total_chapter: propsManga.total_chapter,
        // Map any additional properties if necessary
      };
      dispatch(bookData(mangaInfo)); // Dispatch the mapped book info

      router.push(`/mangaDetailsView?id=${mangaInfo.id}`);
    }
  };

  return (
    <React.Fragment>
      <Box
        onClick={() => handleBookClick()}
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
