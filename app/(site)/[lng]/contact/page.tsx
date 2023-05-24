import { Github, Mail, Linkedin } from "lucide-react";
import { useTranslation } from "@/app/i18n/";
import { Card } from "../../../components/Card";
import { PageProps } from "@/types/PageProps";
import { Navigation } from "@/app/components/Navigation";
import Link from "next/link";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  const socials = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/bruno-mariano-leite/",
      label: "LinkedIn",
      handle: "bruno-mariano-leite",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:bmarianoleite3@gmail.com",
      label: "Email",
      handle: "bmarianoleite3@gmail.com",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/nullbr",
      label: "Github",
      handle: "nullbr",
    },
  ];

  return (
    <>
      <Navigation lng={lng} pages={["about", "projects"]} />

      <div className="container mx-auto flex min-h-screen animate-fade-right items-center justify-center px-4 pb-20 md:pb-0">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 sm:mt-0 lg:grid-cols-3 xl:gap-16">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48"
              >
                <span
                  className="absolute h-2/3 w-px bg-gradient-to-b from-neutral-500 via-neutral-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-500 bg-neutral-900 text-sm text-neutral-200 duration-1000 group-hover:border-neutral-200 group-hover:bg-neutral-900 group-hover:text-white">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="font-display text-xl font-medium text-neutral-200 duration-150 group-hover:text-white xl:text-3xl">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-center text-sm text-neutral-400 duration-1000 group-hover:text-neutral-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
export default Page;
