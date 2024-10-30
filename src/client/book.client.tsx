import { bookApiClient } from '@/client/axios.client';

interface LatestBook {
  page: string;
  limit: string;
  inc: string;
  query: string;
}

const BookClient = {
  getLatestManga(data: LatestBook) {
    return bookApiClient.get('books', {
      params: {
        page: data?.page,
        limit: data?.limit,
        inc: data?.inc,
        query: data?.query,
      },
    });
  },
};

export default BookClient;
