"use client";

import { Project } from "@/types/Project";
import { ArrowLeft, Eye, Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  lng: string;
  views: number;
};
const Nav: React.FC<Props> = ({ views, lng }) => {
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
        className={`fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl animate-fade-left border-b backdrop-blur duration-200 ${
          isIntersecting
            ? "border-transparent bg-neutral-900/0"
            : "bg-neutral-900/500  border-neutral-800 "
        }`}
      >
        <div className="mx-auto flex max-w-3xl flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className="flex items-center gap-1 text-neutral-400"
            >
              <Eye className="h-5 w-5" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views
              )}
            </span>
            <Link target="_blank" href="https://github.com/nullbr">
              <Github className="h-6 w-6 text-neutral-400 duration-500 hover:scale-105 hover:text-primary" />
            </Link>
          </div>

          <Link
            href={`/${lng}/projects`}
            className="text-neutral-400 duration-500 hover:scale-105 hover:text-primary"
          >
            <ArrowLeft className="h-6 w-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
