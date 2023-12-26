import { Project } from "@/types/Project";
import { groq } from "next-sanity";
import config from "./config/client-config";
import { Page } from "@/types/Page";
import { createClient } from "@sanity/client";

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"] | order(date desc) {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      repoUrl,
      viewUrl,
      content,
      stack,
      featured,
      main,
      date
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      repoUrl,
      viewUrl,
      content,
      stack,
      featured,
      main,
      date
    }
    `,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(config).fetch(
    groq`*[_type == "page"] | order(position asc){
      _id,
      _createdAt,
      titleEn,
      titlePt,
      "slug": slug.current,
      description,
      position
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      titleEn,
      titlePt,
      description,
      "slug": slug.current,
      position
    }`,
    { slug }
  );
}
