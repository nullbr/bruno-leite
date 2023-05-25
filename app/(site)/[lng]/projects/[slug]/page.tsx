import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ReportView from "./reportView";
import { PageLayout } from "@/app/components/PageLayout";
import { Navigation } from "@/app/components/Navigation";
import { Redis } from "@upstash/redis";
import { notFound } from "next/navigation";
import Nav from "./nav";
import Link from "next/link";

const redis = Redis.fromEnv();

type Props = {
  params: { slug: string; lng: string };
};

const Project = async ({ params }: Props) => {
  const { slug, lng } = params;

  async function getViews(slug: string): Promise<number | null> {
    redis.get(["pageViews", "projects", slug].join(":"));

    return redis.get(["pageViews", "projects", slug].join(":"));
  }

  // get project and views
  const [project, views] = await Promise.all([
    getProject(slug),
    getViews(slug),
  ]);

  if (Object.keys(project).length === 0) {
    notFound();
  }

  const links: { label: string; href: string }[] = [];
  if (project.repoUrl) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repoUrl}`,
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

      <PageLayout cls="bg-neutral-50">
        <header className="relative isolate mx-auto overflow-hidden pb-10 lg:pb-16 lg:pt-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="title-gradient font-display text-4xl font-bold tracking-tight sm:text-6xl">
                {project.name}
              </h1>
              <div className="mt-6 text-lg leading-8 text-neutral-300">
                <PortableText value={project.content.en} />
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link target="_blank" key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="">
          {/* projects image */}
          <Image
            src={project.image}
            alt={slug}
            width={1920}
            height={1080}
            priority={true}
            className="mt-10 rounded-xl border-2 border-gray-700 object-cover"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Project;
