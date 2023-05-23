import Link from "next/link";
import { TFunction } from "i18next";
import GB from "country-flag-icons/react/3x2/GB";
import BR from "country-flag-icons/react/3x2/BR";

interface FooterBaseProps {
  t: TFunction;
  lng: string;
}

const FooterBase = ({ t, lng }: FooterBaseProps) => {
  const transContent =
    lng === "en" ? (
      <GB title="English" className="..." />
    ) : (
      <BR title="Portuguese" className="..." />
    );

  return (
    <div className="flex items-center justify-center gap-4">
      <Link href={lng === "en" ? {} : "/en"}>
        <GB
          title="English"
          className="w-6 rounded-sm transition hover:scale-110"
        />
      </Link>
      <Link href={lng === "pt" ? {} : "/pt"}>
        <BR
          title="Portuguese"
          className="w-6 rounded-sm transition hover:scale-110"
        />
      </Link>
    </div>
  );
};

export default FooterBase;
