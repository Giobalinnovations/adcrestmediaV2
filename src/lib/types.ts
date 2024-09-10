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
  faqs: {
    question: string;
    answer: string;
  }[];
  __v: number;
};

export type SingleBlogResponse = {
  message: string;
  data: Blog;
};

export type Category = {
  _id: string;
  name: string;
  blogs: string[];
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
};

export type CategoryResponse = {
  message: string;
  data: Category[];
};

export type SingCategoryResponse = {
  message: string;
  data: Category[];
};
