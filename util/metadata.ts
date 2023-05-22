import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const data: Metadata = {
  title: {
    default: "nullbr",
    template: "%s | nullbr",
  },
  description: "Bruno Leite - Full Stack Developer",
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
    locale: "en-US",
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
    shortcut: "/favicon.svg",
  },
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
