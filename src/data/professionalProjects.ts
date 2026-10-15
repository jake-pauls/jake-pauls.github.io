import divinityBanner from "@assets/professional/divinity_banner.png";
import nightingaleBanner from "@assets/professional/nightingale_banner.png";
import bg3Banner from "@assets/professional/bg3_banner.png";

import { professionalProjectLinks } from "@data/links.ts";
import type { PersonalProject } from "./personalProjects";

export const professionalProjects: PersonalProject[] = [
  {
    name: "Larian Studios",
    description: "Junior Tools Programmer · Custom Engine · Divinity",
    year: "January 2024 - Present",
    tags: [
      "C#",
      "C++/CLI",
      "C++",
      "Python",
      "WPF",
      "WinForms",
      "Perforce",
      "Jira",
    ],
    imageSrcs: [divinityBanner],
    projLink: professionalProjectLinks.divinity,
  },
  {
    name: "Inflexion Games",
    description: "Systems Programmer Intern · Unreal Engine 5 · Nightingale",
    year: "May 2023 - December 2023",
    tags: ["C++", "C#", "Blueprints", "Unreal Engine 5", "Perforce", "Jira"],
    imageSrcs: [nightingaleBanner],
    projLink: professionalProjectLinks.nightingale,
  },
  {
    name: "Larian Studios",
    description: "Tools Programmer Intern · Custom Engine · Baldur's Gate 3",
    year: "May 2022 - August 2022",
    tags: ["C#", "C++/CLI", "C++", "WPF", "WinForms", "Perforce", "Jira"],
    imageSrcs: [bg3Banner],
    projLink: professionalProjectLinks.bg3,
  },
];
