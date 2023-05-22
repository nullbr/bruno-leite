import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  titleEn: string;
  titlePt: string;
  slug: string;
  description: PortableTextBlock[];
  position: number;
};
