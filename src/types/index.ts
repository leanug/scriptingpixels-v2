export type Author = {
  name: string;
  avatar: string;
  url?: string;
};

export type Category = {
  label: string;
  slug: string;
};

export type Framer = {
  data: {
    author: Author;
    title: string;
    cover: string;
    swap?: string;
    galleryImgs?: string[];
    slug: string;
    description: string;
    category: Category;
    featured?: boolean;
    stack: string;
    type: 'new' | 'popular';
    pages: number;
    price: number;
    published: boolean;
    url?: string;
  };
};

export type Blog = {
  data: {
    avatar: string;
    title: string;
    slug: string;
    date: string; 
    author?: Author; 
    image?: string;
    description: string;
    category?: Category[];
    featured?: boolean;
    pinned?: boolean;
    published: boolean;
  };
};
