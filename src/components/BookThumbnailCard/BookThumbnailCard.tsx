import { Box, ImageList, ImageListItem, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '@/components/BookThumbnailCard/123.jpg';

const BookThumbnailCard = () => {
  useEffect(() => {
    getBookDetails();
  }, []);
  const getBookDetails = async () => {
    const options = {
      method: 'GET',
      // url: 'https://api.freeapi.app/api/v1/public/books',
      url: 'https://mangaverse-api.p.rapidapi.com/manga/latest',
      // params: {
      //   page: '1',
      //   limit: '10',
      //   inc: 'kind%2Cid%2Cetag%2CvolumeInfo',
      //   query: 'tech',
      // },
      // headers: {
      //   accept: 'application/json',
      // },
      params: {
        page: '1',
        genres: 'Comedy,Fantasy',
        nsfw: 'true',
        type: 'all',
      },
      headers: {
        'x-rapidapi-key': 'ea49983144msh16122c706114817p1d3108jsn0f5606fc9e99',
        'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      console.log(response?.data?.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: '#007FFF',
              dark: '#0066CC',
            },
          },
        }}
      >
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
              <Image src={logo} width={260} height={200} alt="11" style={{ objectFit: 'none' }} />
            </ImageListItem>
          </ImageList>
          <Box component="div" sx={{ ml: 3, display: 'flex', color: '#fa2a1a', fontWeight: 800 }}>
            inline
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default BookThumbnailCard;
