import Link from "next/link";
// import { getPages } from "@/sanity/sanity-utils";
import { Github, Mail, Linkedin } from "lucide-react";
import LngSwitcherBase from "../../components/LngSwitcher/client";
import { useTranslation } from "@/app/i18n/";
import { PageProps } from "@/types/PageProps";

export default async function Home({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  // const projects = await getProjects();
  // get all configured pages
  // const pages = await getPages();

  const socials = [
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/bruno-mariano-leite/",
    },
    {
      icon: <Mail size={22} />,
      href: "mailto:bmarianoleite3@gmail.com",
    },
    {
      icon: <Github size={22} />,
      href: "https://github.com/nullbr",
    },
  ];

  return (
    <>
      {/* <h1>
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
            className="p-3 border-2 border-neutral-500 rounded-lg hover:scale-105 hover:border-blue-500 transition duration-300"
            key={project._id}
          >

            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                className="object-contain w-full h-56 rounded-lg border"
              />
            )}

            <h3 className="title-gradient">{project.name}</h3>
          </Link>
        ))}
      </div> */}
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <nav className="mb-16 mt-4 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            <Link
              href="/about"
              className="text-sm text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
            >
              {t("about.title")}
            </Link>
            <Link
              href="/projects"
              className="text-sm text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
            >
              {t("projects.title")}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
            >
              {t("contact.title")}
            </Link>
          </ul>
        </nav>

        <div className="animate-glow hidden h-px w-screen animate-fade-left md:block" />

        <h1 className="title-gradient text-edge-outline z-10 animate-title cursor-default whitespace-nowrap font-display text-[6rem] duration-1000 sm:text-[8rem] md:text-[10rem] ">
          nullbr
        </h1>

        <div className="animate-glow hidden h-px w-screen animate-fade-right md:block" />

        <div className="mb-4 mt-16 animate-fade-in text-center text-neutral-400">
          {/* Description */}
          <h2 className="max-w-2xl px-2 text-base">{t("home.description")}</h2>

          <div className="my-6 flex items-center justify-center gap-4">
            {socials.map((s) => (
              <>
                <Link
                  href={s.href}
                  target="_blank"
                  className="duration-500 hover:scale-105 hover:text-primary"
                >
                  <span>{s.icon}</span>{" "}
                </Link>
              </>
            ))}
          </div>
          <LngSwitcherBase lng={lng} />
        </div>
      </div>
    </>
  );
}
