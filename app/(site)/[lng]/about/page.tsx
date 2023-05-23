import { useTranslation } from "@/app/i18n";
import { PageLayout } from "../../../components/PageLayout";
import { PageProps } from "@/types/PageProps";
import { Navigation } from "@/app/components/Navigation";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  const tools = [
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/ruby/ruby-plain.svg",
      href: "https://rubyonrails.org",
      alt: "Ruby",
    },
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-plain.svg",
      href: "https://www.javascript.com/",
      alt: "Javascript",
    },
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-plain.svg",
      href: "https://tailwindcss.com/",
      alt: "tailwind css",
    },
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/html5/html5-plain.svg",
      href: "https://www.w3.org/html/",
      alt: "html5",
    },
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
      href: "https://react.dev/",
      alt: "react",
    },
    {
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-plain.svg",
      href: "https://www.ruby-lang.org/",
      alt: "Ruby on Rails",
    },
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/docker/docker-plain.svg",
      href: "https://www.docker.com/",
      alt: "docker",
    },
    {
      icon: "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-plain.svg",
      href: "https://www.postgresql.org",
      alt: "postgresql",
    },
  ];

  return (
    <>
      <Navigation lng={lng} />
      <PageLayout cls="mx-auto max-w-2xl lg:mx-0">
        <h2 className="title-gradient text-3xl font-bold tracking-tight sm:text-4xl">
          {t("about.title")}
        </h2>
        <div className="mb-4 mt-2 h-px w-full bg-neutral-800" />
        <p className=" text-neutral-400">{t("about.description")}</p>

        <div className="my-6 flex items-center justify-center gap-4">
          {tools.map((t) => (
            <>
              <Link
                href={t.href}
                target="_blank"
                className="duration-500 hover:scale-110 hover:text-cyan-500"
              >
                <Image src={t.icon} alt={t.alt} width={30} height={30} />
              </Link>
            </>
          ))}
        </div>
      </PageLayout>
    </>
  );
};
export default Page;
