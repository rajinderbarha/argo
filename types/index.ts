export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specs: ProductSpec[];
  features: string[];
  useCases: string[];
  colors?: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  product?: string;
  /** Script/language of the quote — "pa" = Punjabi (Gurmukhi), "en" = English. */
  lang?: "en" | "pa";
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

export type Industry = {
  name: string;
  description: string;
};
