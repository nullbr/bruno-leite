// import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";

type Props = {
  project: Project;
  views: number;
  lng: string;
};

export const Article: React.FC<Props> = ({ project, views, lng }) => {
  return (
    <Link href={`/${lng}/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <div className="drop-shadow-orange text-xs text-neutral-200 duration-1000 group-hover:border-neutral-200 group-hover:text-white">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </div>

          <span className="flex items-center  gap-1 text-xs text-neutral-500">
            <Eye className="h-4 w-4" />{" "}
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
          </span>
        </div>

        <h2 className="title-gradient z-20 font-display text-xl font-medium duration-1000 group-hover:text-neutral-400 lg:text-3xl">
          {project.name}
        </h2>

        <div className="z-20 mt-4 text-sm text-neutral-400 duration-1000 group-hover:text-neutral-200">
          <PortableText
            value={lng === "en" ? project.content.en : project.content.pt}
          />
        </div>
      </article>
    </Link>
  );
};
