import "../global.css";
import { Inter } from "@next/font/google";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";
import LocalFont from "@next/font/local";
import Link from "next/link";
import { getPages } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
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
}: {
  children: React.ReactNode;
}) {
  // get all configured pages
  const pages = await getPages();

  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <nav className="blur-bg">
          <div className="flex items-center justify-between max-w-3xl mx-auto py-4">
            {/* Root Link */}
            <div className="">
              <Link href="/" className="title-gradient text-xl font-bold">
                Bruno Leite
              </Link>
            </div>
            {/* Pages Links */}
            <div className="flex gap-3 items-center">
              {pages.map((page) => (
                <Link
                  href={`/${page?.slug ? page?.slug : ""}`}
                  key={page._id}
                  className="text-base hover:underline"
                >
                  {page.titleEn}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
