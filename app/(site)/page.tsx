import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h1>
        Hi there, I&apos;m{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-800 to-blue-600 bg-clip-text text-transparent">
          Bruno
        </span>
        !
      </h1>

      <p className="mt-3">
        Glad to have you over! Check out some of my projects
      </p>

      <h2 className="mt-24">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className="p-3 border-2 border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition duration-300"
            key={project._id}
          >
            {/* Image */}
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={500}
                height={500}
                className="object-contain w-full h-56 rounded-lg border"
              />
            )}
            {/* name */}
            <h3 className="title-gradient">{project.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
