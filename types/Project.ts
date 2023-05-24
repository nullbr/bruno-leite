import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  repoUrl: string;
  viewUrl: string;
  content: PortableTextBlock[];
  featured: boolean;
  date: string;
};
