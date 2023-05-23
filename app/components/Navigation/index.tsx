"use client";

import { useTranslation } from "@/app/i18n/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  lng: string;
}

export const Navigation: React.FC<Props> = ({ lng }: Props) => {
  const { t } = useTranslation(lng);

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
        className={`fixed inset-x-0 top-0 z-50 border-b  backdrop-blur duration-200  ${
          isIntersecting
            ? "border-transparent bg-neutral-900/0"
            : "bg-neutral-900/500  border-neutral-800 "
        }`}
      >
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8">
            <Link
              href="/about"
              className="text-neutral-400 duration-500 hover:scale-105 hover:text-cyan-500"
            >
              {t("about.title")}
            </Link>
            <Link
              href="/projects"
              className="text-neutral-400 duration-500 hover:scale-105 hover:text-cyan-500"
            >
              {t("projects.title")}
            </Link>
            <Link
              href="/contact"
              className="text-neutral-400 duration-500 hover:scale-105 hover:text-cyan-500"
            >
              {t("contact.title")}
            </Link>
          </div>

          <Link
            href="/"
            className="text-neutral-400 duration-500 hover:scale-105 hover:text-cyan-500"
          >
            <ArrowLeft className="h-6 w-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};