export type Framer = {
  data: {
    author: {
      name: string;
      avatar: string;
      url?: string;
    };
    title: string;
    cover: string;
    swap?: string;
    galleryImg1?: string;
    galleryImg2?: string;
    galleryImg3?: string;
    galleryImg4?: string;
    slug: string;
    description: string;
    category: {
      label: string
      slug: string;
    };
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
    author?: string;
    image?: string;
    description: string;
    tags?: string[];
    featured?: boolean;
  }
};
