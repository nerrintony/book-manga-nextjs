export type LatestBook = {
  id: string;
  title: string;
  sub_title: string;
  status: string;
  thumb?: string;
  summary: string;
  authors: [string];
  genres: [string];
  nsfw: boolean;
  type: string;
  total_chapter: number;
};

export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

export type VolumeInfo = {
  title: string;
  description: string;
  imageLinks: ImageLinks;
  authors: string;
  maturityRating: string;
  language: string;
  previewLink: string;
  subtitle: string;
};


export type SearchInfo = {
  textSnippet: string;
};

export type AccessInfo = {
  webReaderLink: string;
};

export type Books = {
  id: string;
  volumeInfo: VolumeInfo;
  searchInfo: SearchInfo;
  accessInfo: AccessInfo;
};
