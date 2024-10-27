import apiClient from './axios.client';

interface LatestManga {
  page: string;
  genres: string;
  nsfw: string;
  type: string;
}

const MangeVerseClient = {
  getLatestManga(data: LatestManga) {
    return apiClient.get('latest', {
      params: {
        page: data?.page,
        genres: data?.genres,
        nsfw: data?.nsfw,
        type: data?.type,
      },
    });
  },
};

export default MangeVerseClient