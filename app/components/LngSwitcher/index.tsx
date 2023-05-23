import { useTranslation } from "../../i18n";
import LngSwitcherBase from "./LngSwitcherBase";

interface FooterProps {
  lng: string;
}

const LngSwitcher = async ({ lng }: FooterProps) => {
  const { t } = await useTranslation(lng);

  return <LngSwitcherBase lng={lng} />;
};

export default LngSwitcher;
