"use client";

import LngSwitcherBase from "./LngSwitcherBase";
import { useTranslation } from "../../../../i18n/client";

interface FooterProps {
  lng: string;
}

const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng);
  return <LngSwitcherBase lng={lng} />;
};

export default Footer;
