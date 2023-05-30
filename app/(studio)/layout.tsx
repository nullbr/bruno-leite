import "../global.css";
import { Analytics } from "../components/Analytics";
import { dir } from "i18next";
import { languages } from "@/app/i18n/settings";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: {
    default: "nullbr",
    template: "%s | nullbr",
  },
  description: "Bruno Leite - Full Stack Developer",
  metadataBase: new URL("https://bruno.buzz"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "pt-BR": "/pt",
    },
  },
  openGraph: {
    title: "nullbr",
    description: "Bruno Leite - Full Stack Developer",
    url: "https://bruno.buzz",
    siteName: "bruno.buzz",
    images: [
      {
        url: "https://bruno.buzz/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "nullbr",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

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

      <body>{children}</body>
    </html>
  );
}
