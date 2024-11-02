import { mangaApiClient } from '@/client/axios.client';

interface LatestManga {
  page: string;
  genres: string;
  nsfw: string;
  type: string;
}

interface MangaDetails {
  id: string;
}
const MangeVerseClient = {
  getLatestManga(data: LatestManga) {
    return mangaApiClient.get('/latest', {
      params: {
        page: data?.page,
        genres: data?.genres,
        nsfw: data?.nsfw,
        type: data?.type,
      },
    });
  },
  getMangaDetails(data: MangaDetails) {
    return mangaApiClient.get('', {
      params: {
        id: data?.id,
      },
    });
  },
};

export default MangeVerseClient;
