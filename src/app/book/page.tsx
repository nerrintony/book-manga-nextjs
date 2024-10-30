'use client';

import { Box, Grid2 } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import NavBar from '@/components/NavBar/NavBar';
import BookThumbnailCard from '@/components/BookThumbnailCard/BookThumbnailCard';
import React, { useEffect, useState } from 'react';
import BookClient from '@/client/book.client';
import { Books } from '@/app/LatestBookType/LatestBook.type';
import Loader from '@/components/common/Loader/Loader';

var skip = '1';

const Book = () => {
  const [latestBook, setLatestBook] = useState<Books[]>([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getBookDetails(skip, 'tech');
  }, []);
  const getBookDetails = async (skip: string, text: string) => {
    setLoader(true);

    if (skip == '1') latestBook.length = 0;
    const options = {
      page: skip,
      limit: '8',
      inc: 'volumeInfo',
      query: text,
    };

    try {
      const response = await BookClient.getLatestManga(options);
      if (response?.data?.success) {
        setLoader(false);
        setLatestBook(latestBook.concat(response?.data?.data?.data));
      } else setLoader(false);
    } catch (e) {
      setLoader(false);
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Container maxWidth={'xl'}>
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          {loader ? (
            <Loader />
          ) : (
            <Grid2 container spacing={4}>
              {latestBook?.map((book, index) => (
                <React.Fragment key={book.id}>
                  <BookThumbnailCard propsBook={book} />
                </React.Fragment>
              ))}
            </Grid2>
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Book;
