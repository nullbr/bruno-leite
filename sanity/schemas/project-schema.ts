const project = {
  name: "project",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "repoUrl",
      title: "Repo Url",
      type: "url",
    },
    {
      name: "viewUrl",
      title: "View Url",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "document",
      fields: [
        {
          name: "en",
          title: "English",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "pt",
          title: "Portuguese",
          type: "array",
          of: [{ type: "block", title: "pt" }],
        },
      ],
    },
    {
      name: "date",
      title: "Release Date",
      type: "date",
    },
    {
      name: "featured",
      title: "Featured Project?",
      type: "boolean",
    },
    {
      name: "main",
      title: "Main Project?",
      type: "boolean",
    },
  ],
  initialValue: {
    featured: false,
    main: false,
  },
};

export default project;
