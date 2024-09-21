import { AiFillGithub } from "svelte-icons-pack/ai";
import { BsFileEarmarkTextFill } from "svelte-icons-pack/bs";
import { FaBrandsLinkedinIn } from "svelte-icons-pack/fa";
import { IoMail } from "svelte-icons-pack/io";

import { links } from "./links";
import type { IconType } from "svelte-icons-pack";

type IconData = {
  src: IconType;
  href: string;
};

/** Social icons used across the site, each name is mapped to a corresponding `IconData` */
export const socialIconMap: Map<string, IconData> = new Map([
  ["github", { src: AiFillGithub, href: links.github }],
  ["linkedin", { src: FaBrandsLinkedinIn, href: links.linkedin }],
  ["email", { src: IoMail, href: links.email }],
  ["resume", { src: BsFileEarmarkTextFill, href: links.resume }],
]);
