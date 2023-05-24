import Link from "next/link";
import { getProjects } from "@/sanity/sanity-utils";
import { Eye } from "lucide-react";
import { useTranslation } from "@/app/i18n";
import { PageLayout } from "@/app/components/PageLayout";
import { PageProps } from "@/types/PageProps";
import { Navigation } from "@/app/components/Navigation";
import { Card } from "@/app/components/Card";
import { PortableText } from "@portabletext/react";
import { Article } from "./article";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  // get projects
  const allProjects = await getProjects();
  const featuredProjects = allProjects.filter((p) => p.featured);
  const otherProjects = allProjects.filter((p) => !p.featured);

  return (
    <>
      <Navigation lng={lng} pages={["about", "contact"]} wide={true} />

      <div className="mx-auto max-w-7xl space-y-8 px-6 pt-16 md:space-y-16 md:pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* title */}
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t("projects.title")}
          </h2>

          {/* division */}
          <div className="mb-4 mt-2 h-px w-full bg-neutral-800" />

          {/* content */}
          <p className=" text-neutral-400">{t("projects.description")}</p>
        </div>
        <div className="h-px w-full bg-zinc-800" />

        <div className="mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featuredProjects[0].slug}`}>
              <article className="relative h-full w-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featuredProjects[0].date ? (
                      <time
                        dateTime={new Date(
                          featuredProjects[0].date
                        ).toISOString()}
                      >
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featuredProjects[0].date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="h-4 w-4" />{" "}
                    {Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(0)}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 font-display text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl"
                >
                  {featuredProjects[0].name}
                </h2>
                <p className="mt-4 leading-8 text-zinc-400 duration-150 group-hover:text-zinc-300">
                  <PortableText value={featuredProjects[0].content} />
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="mx-auto flex w-full flex-col gap-8 border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {featuredProjects.slice(1).map((project) => (
              <Card key={project._id}>
                <Article project={project} views={0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden h-px w-full bg-zinc-800 md:block" />

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
          <div className="grid grid-cols-1 gap-4">
            {otherProjects
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {otherProjects
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {otherProjects
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} views={0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
