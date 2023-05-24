import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ReportView from "./reportView";

type Props = {
  params: { project: string; lng: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <>
      <ReportView slug={project.slug} />

      <header className="flex items-center justify-between">
        <h1 className="title-gradient">{project.name}</h1>

        <a
          href={project.repoUrl}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View Project
        </a>
      </header>

      <main>
        {/* project content */}
        <div className="mt-5">
          <PortableText
            value={
              params.lng === "en" ? project.content.en : project.content.pt
            }
          />
        </div>
        {/* projects image */}
        <Image
          src={project.image}
          alt={slug}
          width={1920}
          height={1080}
          priority={true}
          className="mt-10 rounded-xl border-2 border-gray-700 object-cover"
        />
      </main>
    </>
  );
};

export default Project;
