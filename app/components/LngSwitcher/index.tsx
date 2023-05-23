import { useTranslation } from "../../i18n";
import LngSwitcherBase from "./LngSwitcherBase";

interface FooterProps {
  lng: string;
}

const Footer = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng);

  return <LngSwitcherBase lng={lng} />;
};

export default Footer;
