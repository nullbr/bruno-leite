import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";
import { getPages } from "@/sanity/sanity-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bruno Leite Portfolio",
  description: "Bruno Leite - Full Stack Developer",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all configured pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="blur-bg">
          <div className=" flex items-center justify-between max-w-3xl mx-auto py-4">
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
                  href={`/${page.slug}`}
                  key={page._id}
                  className="text-base hover:underline"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </header>
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
