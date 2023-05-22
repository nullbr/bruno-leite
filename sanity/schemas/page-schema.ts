const page = {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "titleEn",
      title: "Title English",
      type: "string",
    },
    {
      name: "titlePt",
      title: "Title Portuguese",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titleEn",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
  ],
};

export default page;
