import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiSass,
  SiVercel,
  SiVuedotjs,
  SiNuxtdotjs,
  SiPostcss,
  SiMui,
  SiAntdesign,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiApollographql,
  SiPrisma,
  SiNestjs,
  SiStrapi,
  SiJira,
  SiGitlab,
  SiFigma,
  SiAdobexd,
  SiAwsamplify,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
} from "react-icons/si";

export const enum Status {
  NOT_STARTED,
  ONGOING,
  HIATUS,
  ABORTED,
  ACQUIRED,
  IDLE,
}

export type Tool = {
  id: string;
  title: string;
  icon: React.ReactNode;
  brandColor: string;
  category:
    | "frontend"
    | "backend"
    | "fullstack"
    | "tooling"
    | "styling"
    | "others";
  status: Status;
  note?: string;
  acquiredAt?: Date;
  className?: React.ComponentProps<"div">["className"];
};

// Since the Date object requires `monthIndex` instead of `month`,
// I put everything with `-1`, so it is more verbose.
const tools: Tool[] = [
  {
    id: "react",
    title: "React",
    icon: <SiReact />,
    category: "frontend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className:
      "data-[tool=react]:hover:text-[#61dbfb] data-[tool=react]:hover:rotate-90",
  },
  {
    id: "react-native",
    title: "React Native",
    icon: <SiReact />,
    category: "frontend",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2018, 8 - 1),
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: <SiNextdotjs />,
    category: "fullstack",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 8 - 1),
    className: "data-[tool=nextjs]:hover:text-black",
  },
  {
    id: "typescript",
    title: "Typescript",
    icon: <SiTypescript />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
    className: "data-[tool=typescript]:hover:text-[#007acc]",
  },
  {
    id: "github",
    title: "Github",
    icon: <SiGithub />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
    className: "data-[tool=github]:hover:text-black",
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 4 - 1),
    className:
      "data-[tool=tailwindcss]:hover:text-[#38BDF8] data-[tool=tailwindcss]:hover:rotate-180",
  },
  {
    id: "sass",
    title: "SASS",
    icon: <SiSass />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2019, 9 - 1),
    className: "data-[tool=sass]:hover:text-[#CC6699]",
  },

  {
    id: "mui",
    title: "Material UI",
    icon: <SiMui />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=mui]:hover:text-[#0079F2]",
  },
  {
    id: "ant-design",
    title: "Ant Design",
    icon: <SiAntdesign />,
    category: "styling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 9 - 1),
    className: "data-[tool=ant-design]:hover:text-[#EB2E3F]",
  },
  {
    id: "nodejs",
    title: "Node.js",
    icon: <SiNodedotjs />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=nodejs]:hover:text-[#68A063]",
  },
  {
    id: "express",
    title: "Express",
    icon: <SiExpress />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=express]:hover:text-black",
  },
  {
    id: "mongodb",
    title: "MongoDB",
    icon: <SiMongodb />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.IDLE,
    acquiredAt: new Date(2018, 8 - 1),
    className: "data-[tool=mongodb]:hover:text-[#589636]",
  },

  {
    id: "prisma",
    title: "Prisma",
    icon: <SiPrisma />,
    category: "backend",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2021, 4 - 1),
    className: "data-[tool=prisma]:hover:text-[#0B334B]",
  },

  {
    id: "gitlab",
    title: "Gitlab",
    icon: <SiGitlab />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 9 - 1),
    className: "data-[tool=gitlab]:hover:text-[#D74027]",
  },
  {
    id: "figma",
    title: "Figma",
    icon: <SiFigma />,
    category: "others",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=figma]:hover:text-[#9A54F2]",
  },

  {
    id: "aws-amplify",
    title: "AWS Amplify",
    icon: <SiAwsamplify />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 12 - 1),
    className: "data-[tool=aws-amplify]:hover:text-[#F19100]",
  },
  {
    id: "aws",
    title: "AWS",
    icon: <SiAmazonaws />,
    category: "tooling",
    brandColor: "#00000000",
    status: Status.ACQUIRED,
    acquiredAt: new Date(2020, 11 - 1),
    className: "data-[tool=aws]:hover:text-[#FF9900]",
  },
];

type Stack =
  | "frontend"
  | "styling"
  | "backend"
  | "others"
  | "common"
  | "portfolio"
  | null;

type GetToolbelt = (props: {
  stack?: Stack;
  filters?: string[];
  filterOptions?: {
    status: Status[];
  };
}) => Tool[];

export const getTool = (item: string) => {
  return tools.find((tool) => tool.title.toLowerCase() === item.toLowerCase());
};

export const getToolbelt: GetToolbelt = (props) => {
  if (!props?.stack && !props?.filters && !props?.filterOptions) {
    return tools;
  }

  if (props.filterOptions) {
    return tools.filter((tool) => {
      if (props.filterOptions?.status) {
        return props.filterOptions.status.includes(tool.status);
      }

      return false;
    });
  }

  const toBeFiltered = props.filters || [];
  switch (props.stack) {
    case "common":
      Array.prototype.push.apply(toBeFiltered, [
        "React",
        "Next.js",
        "Typescript",
        "Github",
        "Tailwind CSS",
      ]);
      break;
    case "frontend":
      Array.prototype.push.apply(toBeFiltered, [
        "React",
        "Typescript",
        "Next.js",
      ]);
      break;
    case "backend":
      Array.prototype.push.apply(toBeFiltered, [
        "Node.js",
        "Express",
        "MongoDB",
      ]);
      break;
    case "styling":
      Array.prototype.push.apply(toBeFiltered, [
        "Tailwind CSS",
        "SASS",
        "Material UI",
        "Ant Design",
      ]);
      break;
    case "others":
      Array.prototype.push.apply(toBeFiltered, [
        "Github",
        "Figma",
        "AWS Amplify",
        "AWS",
      ]);
      break;
    case "portfolio":
      Array.prototype.push.apply(toBeFiltered, [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
      ]);
      break;
    default:
      break;
  }

  const cleanupToBeFiltered = [...new Set(toBeFiltered)];

  const theTools = cleanupToBeFiltered.map((item) => getTool(item));
  return theTools.filter(
    (tool) => tool && [Status.ACQUIRED, Status.IDLE].includes(tool.status)
  ) as Tool[];
};
