export type Framer = {
  data: {
    title: string;
    image: string;
    cover: string;
    swap: string;
    slug: string;
    description: string;
    caterogy: {
      label: string
      slug: string;
    };
    featured?: boolean;
    type: 'new' | 'popular';
    price: number;
    published: boolean;
    url: string;
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
