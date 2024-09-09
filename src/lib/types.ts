export type BlogResponse = {
  message: string;
  results: number;
  data: Blog[];
};

export type Blog = {
  _id?: string;
  category: {
    _id: string;
    name: string;
    blogs: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  title: string;
  description: string;
  excerpt: string;
  content: string;
  slug: string;
  imageCover: string;
  imageCoverAlt: string;
  imageCoverCaption: string;
  imageCoverDescription: string;
  focusKeyword?: string;
  count: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type SingleBlogResponse = {
  message: string;
  data: Blog;
};
