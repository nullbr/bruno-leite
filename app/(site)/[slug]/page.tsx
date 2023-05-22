import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Params = {
  params: { slug: string };
};

const Page = async ({ params }: Params) => {
  const page = await getPage(params.slug);

  console.log(params);

  return (
    <>
      <h1 className="title-gradient mb-10">{page.titleEn}</h1>

      <PortableText value={page.description} />
    </>
  );
};
export default Page;
