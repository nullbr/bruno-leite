import Link from "next/link";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bruno Leite Portfolio",
  description: "Bruno Leite - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="blur-bg">
          <div className="max-w-3xl mx-auto py-4">
            <Link href="/" className="title-gradient text-lg font-bold">
              Bruno Leite
            </Link>
          </div>
        </header>
        <main className="max-w-3xl mx-auto py-10">{children}</main>
      </body>
    </html>
  );
}
