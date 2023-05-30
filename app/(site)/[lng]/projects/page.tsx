import { getProjects } from "@/sanity/sanity-utils";
import { useTranslation } from "@/app/i18n";
import { PageProps } from "@/types/PageProps";
import Navigation from "@/app/components/Navigation";
import Projects from "./projects";
import { getAllViews } from "@/utils/redis";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  // get all projects
  const projects = await getProjects();

  // get project views count
  const views = await getAllViews(projects);

  return (
    <>
      <Navigation lng={lng} pages={["home", "about", "contact"]} wide={true} />

      <div className="mx-auto max-w-7xl space-y-8 px-6 pb-24 pt-24 md:space-y-16 lg:px-8 lg:pb-8 lg:pt-32">
        <div className="animate-fade-right">
          <header className="max-w-2xl">
            {/* title */}
            <h2 className="title-gradient text-3xl font-bold tracking-tight sm:text-4xl">
              {t("projects.title")}
            </h2>

            {/* content */}
            <p className="text-neutral-400">{t("projects.description")}</p>
          </header>

          {/* division */}
          <div className="h-px w-full bg-neutral-800" />
        </div>

        <Projects allProjects={projects} views={views} lng={lng} t={t} />
      </div>
    </>
  );
};

export default Page;
