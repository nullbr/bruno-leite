import { useTranslation } from "@/app/i18n";
import { PageLayout } from "../../../components/PageLayout";
import { PageProps } from "@/types/PageProps";

const Page = async ({ params: { lng } }: PageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <PageLayout>
      <h1 className="title-gradient mb-10">{t("about.title")}</h1>
      <p className="text-neutral-400">{t("about.description")}</p>
    </PageLayout>
  );
};
export default Page;
