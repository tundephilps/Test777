import {
  FaCoins,
  FaCrown,
  FaDice,
  FaGift,
  FaHeadset,
  FaHeart,
  FaHome,
} from "react-icons/fa";
import { PiSpinnerBallFill } from "react-icons/pi";
import { RiLiveLine, RiTrophyLine } from "react-icons/ri";

export const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
];

export const getLinks = (t: (key: string) => string) => [
  { href: "/", label: t("home"), icon: <FaHome /> },
  { href: "/casino", label: t("casino"), icon: <FaDice /> },
  {
    href: "/live-casino",
    label: t("live_casino"),
    icon: <RiLiveLine />,
  },
  { href: "/jackpot", label: t("jackpot"), icon: <FaGift /> },
  {
    href: "/tournaments",
    label: t("tournaments"),
    icon: <RiTrophyLine />,
  },
  {
    href: "/wheelbonus",
    label: t("wheel_bonus"),
    icon: <PiSpinnerBallFill />,
  },
  {
    href: "/my-favorite",
    label: t("my_favorite"),
    icon: <FaHeart />,
  },
  { href: "/promotions", label: t("promotions"), icon: <FaGift /> },
  { href: "/vip", label: t("vip_club"), icon: <FaCrown /> },
  { href: "/cashback", label: t("cashback"), icon: <FaCoins /> },
  { href: "/contact", label: t("contact"), icon: <FaHeadset /> },
];
