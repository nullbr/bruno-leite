"use client";

import { useTranslation } from "@/app/i18n/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  lng: string;
  pages: Array<"home" | "about" | "contact" | "projects">;
  wide?: boolean;
}

const Navigation: React.FC<Props> = ({ lng, pages, wide = false }: Props) => {
  const { t } = useTranslation(lng);
  const router = useRouter();

  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 animate-fade-left border-b backdrop-blur duration-200  ${
          isIntersecting
            ? "border-transparent bg-neutral-900/0"
            : "bg-neutral-900/500  border-neutral-800 "
        }`}
      >
        <div
          className={`mx-auto flex flex-row-reverse items-center justify-between p-6 ${
            wide ? "max-w-7xl" : "max-w-3xl"
          }`}
        >
          <div className="flex justify-between gap-4">
            {pages.map((page) => {
              return (
                <Link
                  key={page}
                  href={`/${lng}/${page === "home" ? "" : page}`}
                  className="text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
                >
                  {t(`${page}.title`)}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => router.back()}
            className="text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
          >
            <ArrowLeft className="h-6 w-6 " />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
