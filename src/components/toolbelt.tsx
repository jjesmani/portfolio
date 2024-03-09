import {
	SiReact,
	SiTypescript,
	SiGithub,
	SiTailwindcss,
	SiVuedotjs,
	SiNuxtdotjs,
	SiMui,
	SiFigma,
	SiAwsamplify,
	SiAmazonaws,
	SiDocker,
	SiPytorch,
	SiPython,
	SiAppstore,
	SiAndroid,
	SiGraphql,
} from "react-icons/si";

import { TbBrandDjango } from "react-icons/tb";

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

const tools: Tool[] = [
	{
		id: "vuejs",
		title: "VueJS",
		icon: <SiVuedotjs />,
		category: "frontend",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=vuejs]:hover:text-[#41b883]",
	},
	{
		id: "nuxtjs",
		title: "Nuxt.js",
		icon: <SiNuxtdotjs />,
		category: "fullstack",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=nuxtjs]:hover:text-[#41b883]",
	},
	{
		id: "react",
		title: "React",
		icon: <SiReact />,
		category: "frontend",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2023, 7 - 1),
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
		acquiredAt: new Date(2023, 9 - 1),
	},
	{
		id: "typescript",
		title: "Typescript",
		icon: <SiTypescript />,
		category: "tooling",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2023, 7 - 1),
		className: "data-[tool=typescript]:hover:text-[#007acc]",
	},
	{
		id: "github",
		title: "Github",
		icon: <SiGithub />,
		category: "others",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2022, 9 - 1),
		className: "data-[tool=github]:hover:text-black",
	},
	{
		id: "tailwindcss",
		title: "Tailwind CSS",
		icon: <SiTailwindcss />,
		category: "styling",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2023, 8 - 1),
		className:
			"data-[tool=tailwindcss]:hover:text-[#38BDF8] data-[tool=tailwindcss]:hover:rotate-180",
	},

	{
		id: "mui",
		title: "Material UI",
		icon: <SiMui />,
		category: "styling",
		brandColor: "#00000000",
		status: Status.IDLE,
		acquiredAt: new Date(2023, 9 - 1),
		className: "data-[tool=mui]:hover:text-[#0079F2]",
	},
	{
		id: "figma",
		title: "Figma",
		icon: <SiFigma />,
		category: "others",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2023, 9 - 1),
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
		id: "django-rest",
		title: "Django REST",
		icon: <TbBrandDjango />,
		category: "backend",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2020, 12 - 1),
		className: "data-[tool=django-rest]:hover:text-django-color",
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
	{
		id: "docker",
		title: "Docker",
		icon: <SiDocker />,
		category: "tooling",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2020, 7 - 1),
		className: "data-[tool=docker]:hover:text-[#0db7ed]",
	},
	{
		id: "pytorch",
		title: "Pytorch",
		icon: <SiPytorch />,
		category: "backend",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=pytorch]:hover:text-[#F05F42]",
	},
	{
		id: "python",
		title: "Python",
		icon: <SiPython />,
		category: "backend",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=python]:hover:text-[#4584b6]",
	},
	{
		id: "ios",
		title: "ios",
		icon: <SiAppstore />,
		category: "others",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=ios]:hover:text-[#0470b9]",
	},
	{
		id: "android",
		title: "android",
		icon: <SiAndroid />,
		category: "others",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=android]:hover:text-[#3DDC84]",
	},
	{
		id: "graphql",
		title: "graphql",
		icon: <SiGraphql />,
		category: "others",
		brandColor: "#00000000",
		status: Status.ACQUIRED,
		acquiredAt: new Date(2024, 2 - 1),
		className: "data-[tool=graphql]:hover:text-[#e535ab]",
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
	return tools.find(
		(tool) => tool.title.toLowerCase() === item.toLowerCase()
	);
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
				"VueJS",
				"Nuxt.js",
				"React",
				"Typescript",
				"Github",
				"Tailwind CSS",
			]);
			break;
		case "frontend":
			Array.prototype.push.apply(toBeFiltered, [
				"VueJS",
				"Nuxt.js",
				"React",
				"Typescript",
			]);
			break;
		case "backend":
			Array.prototype.push.apply(toBeFiltered, [
				"django rest",
				"graphql",
			]);
			break;
		case "styling":
			Array.prototype.push.apply(toBeFiltered, [
				"Tailwind CSS",
				"Material UI",
			]);
			break;
		case "others":
			Array.prototype.push.apply(toBeFiltered, [
				"Github",
				"Figma",
				"AWS Amplify",
				"AWS",
				"docker",
				"ios",
				"android",
				"pytorch",
			]);
			break;
		case "portfolio":
			Array.prototype.push.apply(toBeFiltered, [
				"VueJS",
				"Nuxt.js",
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
