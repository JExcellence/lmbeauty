import { IconType } from "react-icons";

import {
  HiChevronUp,
  HiChevronDown,
  HiChevronRight,
  HiChevronLeft,
  HiOutlineArrowPath,
  HiCheck,
  HiOutlineSun,
  HiOutlineMoon,
  HiMiniQuestionMarkCircle,
  HiMiniMinus,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiMiniPlus,
  HiMiniUser,
  HiMiniXMark,
  HiEyeDropper,
  HiOutlineClipboard,
  HiOutlineMagnifyingGlass,
  HiCalendar,
  HiOutlineLink,
  HiExclamationTriangle,
  HiArrowUpRight,
  HiInformationCircle,
  HiExclamationCircle,
  HiCheckCircle,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineComputerDesktop,
  HiOutlineDocumentCurrencyEuro, HiHeart, HiOutlineGift, HiOutlineArrowTrendingUp, HiOutlineUsers
} from "react-icons/hi2";

import { RiVisaLine } from "react-icons/ri";

import {FaDiscord, FaGithub, FaGoogle, FaInstagram, FaWhatsapp} from "react-icons/fa6";
import {HiMail, HiOutlineClock} from "react-icons/hi";

import { LuChevronsLeftRight } from "react-icons/lu";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  chevronsLeftRight: LuChevronsLeftRight,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  clipboard: HiOutlineClipboard,
  mail: HiMail,
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  instagram: FaInstagram,
  google: FaGoogle,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  heart: HiHeart,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  clock: HiOutlineClock,
  gift: HiOutlineGift,
  trending: HiOutlineArrowTrendingUp,
  users: HiOutlineUsers,
  sparkle: HiOutlineSparkles,
  computer: HiOutlineComputerDesktop,
  docCurrencyEuro: HiOutlineDocumentCurrencyEuro
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
