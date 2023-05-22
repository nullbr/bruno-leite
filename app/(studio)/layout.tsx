import { Inter } from "next/font/google";
import "../global.css";
import { Analytics } from "../components/analytics";
import { data } from "@/util/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = data;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
