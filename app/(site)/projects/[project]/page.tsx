import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <>
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
          <PortableText value={project.content} />
        </div>
        {/* projects image */}
        <Image
          src={project.image}
          alt={slug}
          width={1920}
          height={1080}
          priority={true}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      </main>
    </>
  );
};

export default Project;
