import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  name: "default",
  title: "next-portfolio",

  projectId: "h2z9q1vy",
  dataset: "production",

  apiVersion: "1.0",

  basePath: "/admin",

  plugins: [deskTool(), visionTool()],
});

export default config;
