import Link from "next/link";
import { languages } from "@/app/i18n/settings";

interface LngSwitcherProps {
  lng: string;
}

const LngSwitcherBase = ({ lng }: LngSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {languages.map((l) => (
        <Link
          key={l}
          href={l === lng ? {} : `/${l}`}
          className="duration-500 hover:scale-110 hover:text-primary"
        >
          {l}
        </Link>
      ))}
    </div>
  );
};

export default LngSwitcherBase;
