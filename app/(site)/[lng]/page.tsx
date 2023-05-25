import Link from "next/link";
// import { getPages } from "@/sanity/sanity-utils";
import { Github, Mail, Linkedin } from "lucide-react";
import LngSwitcher from "../../components/LngSwitcher/client";
import { useTranslation } from "@/app/i18n/";
import { PageProps } from "@/types/PageProps";
import { getPages } from "@/sanity/sanity-utils";

export default async function Home({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng);

  // get all configured pages
  const pages = await getPages();

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
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <nav className="mb-16 mt-4 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {["about", "projects", "contact"].map((page) => {
              return (
                <Link
                  key={page}
                  href={`/${lng}/${page}`}
                  className="text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
                >
                  {t(`${page}.title`)}
                </Link>
              );
            })}
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
              <Link
                href={s.href}
                key={s.href}
                target="_blank"
                className="duration-500 hover:scale-105 hover:text-primary"
              >
                <span>{s.icon}</span>{" "}
              </Link>
            ))}
          </div>
          <LngSwitcher lng={lng} />
        </div>
      </div>
    </>
  );
}
