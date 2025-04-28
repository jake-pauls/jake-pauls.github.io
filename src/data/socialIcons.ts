import { AiFillGithub, AiOutlinePaperClip } from "svelte-icons-pack/ai";
import { FaBrandsLinkedinIn, FaBrandsItchIo } from "svelte-icons-pack/fa";
import { IoMail } from "svelte-icons-pack/io";

import { links } from "./links";
import type { IconType } from "svelte-icons-pack";

type IconData = {
  src: IconType;
  href: string;
};

/** Social icons used across the site, each name is mapped to a corresponding `IconData` */
export const socialIconMap: Map<string, IconData> = new Map([
  ["GitHub", { src: AiFillGithub, href: links.github }],
  ["LinkedIn", { src: FaBrandsLinkedinIn, href: links.linkedin }],
  ["Email", { src: IoMail, href: links.email }],
  ["ItchIo", { src: FaBrandsItchIo, href: links.itchio }],
]);
