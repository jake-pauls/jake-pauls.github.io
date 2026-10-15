import bianBeatImgTitle from "@assets/projects/bian-beat/bian-beat_Title.gif";
import bianBeatImgA from "@assets/projects/bian-beat/bian-beat_A.png";
import bianBeatImgB from "@assets/projects/bian-beat/bian-beat_B.png";

import cownadoImgTitle from "@assets/projects/cownado/cownado_Title.png";
import cownadoImgA from "@assets/projects/cownado/cownado_A.png";
import cownadoImgB from "@assets/projects/cownado/cownado_B.png";
import cownadoImgC from "@assets/projects/cownado/cownado_C.png";

import octopationsImgTitle from "@assets/projects/octopations/octopations_Title.png";
import octopationsImgA from "@assets/projects/octopations/octopations_A.png";
import octopationsImgB from "@assets/projects/octopations/octopations_B.png";
import octopationsImgC from "@assets/projects/octopations/octopations_C.png";

import catjamImgTitle from "@assets/projects/catjam/catjam_Title.png";
import catjamImgA from "@assets/projects/catjam/catjam_A.png";
import catjamImgB from "@assets/projects/catjam/catjam_B.png";
import catjamImgC from "@assets/projects/catjam/catjam_C.png";

import surfImgTitle from "@assets/projects/surf/surf_Title.png";
import surfImgA from "@assets/projects/surf/surf_A.png";
import surfImgB from "@assets/projects/surf/surf_B.png";
import surfImgC from "@assets/projects/surf/surf_C.png";
import surfImgD from "@assets/projects/surf/surf_D.png";

import sadImgTitle from "@assets/projects/sad-engine/sad-engine_Title.png";
import sadImgA from "@assets/projects/sad-engine/sad-engine_A.png";
import sadImgB from "@assets/projects/sad-engine/sad-engine_B.png";
import sadImgC from "@assets/projects/sad-engine/sad-engine_C.png";
import sadImgD from "@assets/projects/sad-engine/sad-engine_D.png";

import hamstarsImgTitle from "@assets/projects/hamstars/Hamstars_Title.png";
import hamstarsImgA from "@assets/projects/hamstars/Hamstars_A.png";
import hamstarsImgB from "@assets/projects/hamstars/Hamstars_B.png";

import qcImgTitle from "@assets/projects/quality-control/QC_Title.png";
import qcImgA from "@assets/projects/quality-control/QC_A.png";
import qcImgB from "@assets/projects/quality-control/QC_B.png";

import illumeImgTitle from "@assets/projects/illume/Illume_Title.png";
import illumeImgA from "@assets/projects/illume/Illume_A.png";
import illumeImgB from "@assets/projects/illume/Illume_B.png";
import illumeImgC from "@assets/projects/illume/Illume_C.png";
import illumeImgD from "@assets/projects/illume/Illume_D.png";

import ffImgTitle from "@assets/projects/frost-fire/FF_Title.png";
import ffImgA from "@assets/projects/frost-fire/FF_A.jpeg";
import ffImgB from "@assets/projects/frost-fire/FF_B.jpeg";
import ffImgC from "@assets/projects/frost-fire/FF_C.jpeg";

import tpbImgTitle from "@assets/projects/the-phantom-blade/TPB_Title.png";
import tpbImgA from "@assets/projects/the-phantom-blade/TPB_A.png";
import tpbImgB from "@assets/projects/the-phantom-blade/TPB_B.png";
import tpbImgC from "@assets/projects/the-phantom-blade/TPB_C.png";

export type PersonalProject = {
  name: string;
  description: string;
  year?: string;
  tags: string[];
  ghLink?: string;
  projLink?: string;
  videoLink?: string;
  imageSrcs?: ImageMetadata[];
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Bian Beat",
    description:
      "Created @ Global Game Jam 2026 🎭 Rhythm game inspired by Bian Lian (變臉) that's played with the expressions you make! Smile, frown, and scowl to the beat using your webcam.",
    year: "2026",
    tags: ["Unity", "C#", "Unity Barracuda", "Python", "PyTorch"],
    ghLink: "https://github.com/jake-pauls/BianBeat",
    projLink: "https://globalgamejam.org/games/2026/mask-game-5",
    imageSrcs: [bianBeatImgTitle, bianBeatImgA, bianBeatImgB],
  },
  {
    name: "Cownado",
    description:
      "Created @ Brackeys Game Jam 2024.2 🐮 Wario-ware inspired arcade game where players round up cows into pens and complete mini-games to keep them happy!",
    year: "2025",
    tags: ["Godot", "GDScript"],
    ghLink: "https://github.com/20TB-ZipBomb/BGJ2024",
    projLink: "https://jake-pauls.itch.io/cownado",
    imageSrcs: [cownadoImgTitle, cownadoImgA, cownadoImgB, cownadoImgC],
  },
  {
    name: "Octopations",
    description:
      "Created @ Global Game Jam 2024 🐙 Jackbox-style party game where everyone takes turns convincing each other they are perfect for the job based on their work experience.",
    year: "2024",
    tags: ["Go", "Svelte", "Unreal Engine 5"],
    ghLink: "https://github.com/20TB-ZipBomb/GGJ_Platform",
    projLink: "https://globalgamejam.org/games/2024/octopations-4",
    imageSrcs: [
      octopationsImgTitle,
      octopationsImgA,
      octopationsImgB,
      octopationsImgC,
    ],
  },
  {
    name: "Cat out of Hell",
    description:
      "Created @ Alberta Game Jam 2023 🦕 Bullet-hell inspired game where Steve the cat tries to dodge sprays of water! Can Steve dodge them for a whole whole minute?",
    year: "2023",
    tags: ["C++", "Blueprints", "Unreal Engine 5", "Perforce"],
    ghLink: "https://github.com/KevinAlexV/CatOutOfHell",
    projLink: "https://maxsg5.itch.io/cat-out-of-hell",
    videoLink: "https://youtu.be/QJd8-a_p1M0",
    imageSrcs: [catjamImgTitle, catjamImgA, catjamImgB, catjamImgC],
  },
  {
    name: "surf",
    description:
      "Physically-based renderer created in Vulkan alongside a strongly typed language for scripting PBR materials at runtime.",
    year: "2023",
    tags: ["C++", "C", "Vulkan", "HLSL", "CMake", "OCaml"],
    ghLink: "https://github.com/jake-pauls/surf",
    videoLink: "https://youtu.be/lyINvBnGbyw",
    imageSrcs: [surfImgTitle, surfImgA, surfImgB, surfImgC, surfImgD],
  },
  {
    name: "Sad Engine",
    description:
      "Custom ECS-based game engine created with C++, OpenGL, ImGui, and entt that runs a small FPS game scripted in C#.",
    year: "2022",
    tags: ["C++", "C#", "Python", "OpenGL", "GLSL", "Premake"],
    ghLink: "https://github.com/focus-fire/sad",
    videoLink: "https://youtu.be/bUrmJdq05go",
    imageSrcs: [sadImgTitle, sadImgA, sadImgB, sadImgC, sadImgD],
  },
  {
    name: "Hamstars",
    description:
      "Winner, The Artisan Award @ Town One 2022 🎨 Multiplayer game created in Unity where up to four players brawl amongst hamsters to collect the most nuts and squash the competition.",
    year: "2022",
    tags: ["C#", "Unity"],
    ghLink: "https://github.com/jake-pauls/Hamstars/tree/develop",
    projLink: "https://jake-pauls.itch.io/hamstars",
    imageSrcs: [hamstarsImgTitle, hamstarsImgA, hamstarsImgB],
  },
  {
    name: "QualityControl",
    description:
      "Endless iPhone game created in OpenGL where players are dropped into a game test environment and must survive the onslaught of obstacles thrown at them.",
    year: "2022",
    tags: ["C++", "OpenGL", "GLSL"],
    ghLink: "https://github.com/jake-pauls/quality-control",
    videoLink: "https://youtu.be/Z55qi4fPgq8",
    imageSrcs: [qcImgTitle, qcImgA, qcImgB],
  },
  {
    name: "Illume",
    description:
      "Single-player adventure platformer where you explore the Elder Forest in search of the earth stone that was stolen from the Woodsworth clan.",
    year: "2022",
    tags: ["C#", "Unity", "HLSL"],
    ghLink: "https://github.com/TM-Rocket/Illume",
    projLink: "https://tmrocket.itch.io/illume",
    videoLink: "https://www.youtube.com/watch?v=e1dXPF0bLwg&feature=youtu.be",
    imageSrcs: [illumeImgTitle, illumeImgA, illumeImgB, illumeImgC, illumeImgD],
  },
  {
    name: "FrostFire",
    description:
      "Top-down multiplayer survival defense game where players work to defend and replenish a diminishing campfire from enraged snowmen.",
    year: "2021",
    tags: ["C#", "Unity", "HLSL"],
    ghLink: "https://github.com/paulc100/FrostFire",
    projLink: "https://defending.itch.io/frostfire",
    videoLink: "https://youtu.be/USLnmfNqFdk",
    imageSrcs: [ffImgTitle, ffImgA, ffImgB, ffImgC],
  },
  {
    name: "The Phantom Blade",
    description:
      "Proof of concept for a Metroidvania-style game built in Unity. Follow Akiro, the zombie ninja, on his epic journey through the underworld alongside the demon companion that attempted to resurrect him.",
    year: "2021",
    tags: ["C#", "Unity"],
    ghLink: "https://github.com/jake-pauls/phantom-blade",
    projLink: "https://tpbstudios.itch.io/the-phantom-blade",
    videoLink: "https://youtu.be/C9kMpJgolaA",
    imageSrcs: [tpbImgTitle, tpbImgA, tpbImgB, tpbImgC],
  },
];
