import { PortableTextBlock } from "sanity";

type Content = {
  en: PortableTextBlock[];
  pt: PortableTextBlock[];
};

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  repoUrl: string;
  viewUrl: string;
  content: Content;
  stack: Array<string>;
  featured: boolean;
  main: boolean;
  date: string;
};
