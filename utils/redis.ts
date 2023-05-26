import { Project } from "@/types/Project";
import { Redis } from "@upstash/redis";

export async function getAllViews(projects: Array<Project>) {
  const views = await Redis.fromEnv().mget<number[]>(
    ...projects.map((p) => ["pageViews", "projects", p.slug].join(":"))
  );

  return views.reduce((acc, v, i) => {
    acc[projects[i].slug] = v ?? 0;

    return acc;
  }, {} as Record<string, number>);
}

export async function getProjectViews(slug: string): Promise<number | null> {
  return Redis.fromEnv().get(["pageViews", "projects", slug].join(":"));
}
