import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
  name: "default",
  title: "next-portfolio",

  projectId: "h2z9q1vy",
  dataset: "production",

  apiVersion: "1",

  basePath: "/admin",

  plugins: [deskTool(), visionTool()],

  schema: { types: schemas },
});

export default config;
