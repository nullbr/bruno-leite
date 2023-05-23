"use client";

import FooterBase from "./FooterBase";
import { useTranslation } from "../../../../i18n/client";

interface FooterProps {
  lng: string;
}

const Footer = ({ lng }: FooterProps) => {
  const { t } = useTranslation(lng);
  return <FooterBase t={t} lng={lng} />;
};

export default Footer;
