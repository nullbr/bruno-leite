import { useTranslation } from "@/app/i18n";
import { PageLayout } from "@/app/components/PageLayout";
import { PageProps } from "@/types/PageProps";
import { Navigation } from "@/app/components/Navigation";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <>
      <Navigation lng={lng} pages={["about", "contact"]} />
      <PageLayout>
        <></>
      </PageLayout>
    </>
  );
};

export default Page;
