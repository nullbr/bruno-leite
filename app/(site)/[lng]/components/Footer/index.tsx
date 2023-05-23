import { useTranslation } from "../../../../i18n";
import FooterBase from "./FooterBase";

interface FooterProps {
  lng: string;
}

const Footer = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng);

  return <FooterBase t={t} lng={lng} />;
};

export default Footer;
