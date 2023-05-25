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
      name: "stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Ruby",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/ruby/ruby-plain.svg",
          },
          {
            title: "Rspec",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/rspec/rspec-original.svg",
          },
          {
            title: "Javascript",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg",
          },
          {
            title: "Typescript",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/typescript/typescript-plain.svg",
          },
          {
            title: "Tailwindcss",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-plain.svg",
          },
          {
            title: "ReactJs",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg",
          },
          {
            title: "NextJs",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/nextjs/nextjs-original.svg",
          },
          {
            title: "Ruby on Rails",
            value:
              "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-plain.svg",
          },
          {
            title: "Postgresql",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-plain.svg",
          },
          {
            title: "HTML5",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/html5/html5-plain.svg",
          },
          {
            title: "CSS3",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/css3/css3-plain.svg",
          },
          {
            title: "SCSS",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/sass/sass-original.svg",
          },
          {
            title: "Docker",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/docker/docker-plain.svg",
          },
          {
            title: "Python",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/python/python-plain.svg",
          },

          {
            title: "Fast API",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/fastapi/fastapi-plain.svg",
          },
          {
            title: "Redis",
            value:
              "https://github.com/devicons/devicon/raw/master/icons/redis/redis-plain.svg",
          },
        ],
      },
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
