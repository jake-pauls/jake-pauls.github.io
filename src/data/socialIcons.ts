import { AiFillGithub, AiOutlinePaperClip } from "svelte-icons-pack/ai";
import { FaBrandsLinkedinIn, FaBrandsItchIo } from "svelte-icons-pack/fa";
import { IoMail } from "svelte-icons-pack/io";

import { personalLinks } from "./links";
import type { IconType } from "svelte-icons-pack";

type IconData = {
  src: IconType;
  href: string;
};

/** Social icons used across the site, each name is mapped to a corresponding `IconData` */
export const socialIconMap: Map<string, IconData> = new Map([
  ["GitHub", { src: AiFillGithub, href: personalLinks.github }],
  ["LinkedIn", { src: FaBrandsLinkedinIn, href: personalLinks.linkedin }],
  ["Email", { src: IoMail, href: personalLinks.email }],
  ["ItchIo", { src: FaBrandsItchIo, href: personalLinks.itchio }],
]);
