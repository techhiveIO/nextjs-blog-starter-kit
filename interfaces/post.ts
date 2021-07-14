export type BlogPost = {
  id: string;
  slug: string;
  body: string;
  title: string;
  description: string;
  tags: string;
  heroImage: {
    url: string;
  };
  author: {
    id: string;
    name: string;
    title: string;
    company: string;
    shortBio: string;
    twitter: string;
  };
  publishedAt: Date;
};
