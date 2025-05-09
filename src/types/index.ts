export type Work = {
  data: {
    title: string;
    img: string;
    slug: string;
    description: string;
    outbound?: string;
    featured?: boolean;
    tags?: string[];
  };
};
