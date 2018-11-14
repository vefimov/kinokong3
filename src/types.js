// @flow
export type MenuItem = {
  title: string,
  url: string,
  subItems?: MenuItem[],
};

export type MovieCover = {
  title: string,
  coverImage: string,
  rating?: {
    likes: string,
    dislikes: string,
  },
  url: string,
};
