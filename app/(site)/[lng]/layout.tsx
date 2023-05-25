import "../../global.css";
import { Analytics } from "../../components/Analytics";
// import { getPages } from "@/sanity/sanity-utils";
import { data, inter, calSans } from "@/util/metadata";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = data;

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html
      className={[inter.variable, calSans.variable].join(" ")}
      lang={lng}
      dir={dir(lng)}
    >
      <head>
        <Analytics />
      </head>

      <body
        className={`min-h-screen bg-black bg-gradient-to-bl from-black via-cyan-800/30 to-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
