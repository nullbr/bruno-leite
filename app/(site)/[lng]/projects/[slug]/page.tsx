import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ReportView from "./reportView";
import { notFound } from "next/navigation";
import Nav from "./nav";
import Link from "next/link";
import { getProjectViews } from "@/utils/redis";

export const revalidate = 60;

type Props = {
  params: { slug: string; lng: string };
};

const Project = async ({ params }: Props) => {
  const { slug, lng } = params;

  // get project and views
  const [project, views] = await Promise.all([
    getProject(slug),
    getProjectViews(slug),
  ]);

  if (Object.keys(project).length === 0) {
    notFound();
  }

  const links: { label: string; href: string }[] = [];
  if (project.repoUrl) {
    links.push({
      label: "GitHub",
      href: project.repoUrl,
    });
  }
  if (project.viewUrl) {
    links.push({
      label: "Demo",
      href: project.viewUrl,
    });
  }

  return (
    <>
      <ReportView slug={project.slug} />

      <Nav views={views || 0} lng={lng} />

      <div className="min-h-[100svh] bg-neutral-100">
        <header className="w-screen bg-black bg-gradient-to-bl from-black via-cyan-800/30 to-black pt-20">
          <div className="mx-auto flex max-w-3xl animate-fade-right flex-col items-center whitespace-pre-line px-6 pb-10 text-center text-neutral-400">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="title-gradient font-display text-4xl font-bold tracking-tight sm:text-6xl">
                {project.name}
              </h1>
              <div className="mt-6 text-lg leading-8 text-neutral-300">
                <PortableText
                  value={lng === "en" ? project.content.en : project.content.pt}
                />
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link
                    target="_blank"
                    key={link.label}
                    href={link.href}
                    className="duration-500 hover:scale-105 hover:text-primary"
                  >
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto h-screen max-w-3xl animate-fade-right py-10 text-center">
          {/* Tech Stack */}
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4 px-6 pb-10">
            {project.stack.map((tech) => {
              return (
                <div className="duration-500 hover:scale-110 hover:text-primary">
                  <Image src={tech} alt={tech} width={30} height={30} />
                </div>
              );
            })}
          </div>
          {/* project image */}
          <div className="mx-auto max-w-3xl px-6">
            <Image
              src={project.image}
              alt={slug}
              width={1920}
              height={1080}
              priority={true}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
