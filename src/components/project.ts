import { getTool } from "./toolbelt";
import metahub_logo from "../assets/metahub_logo.png";
import enygma_logo from "../assets/enygma_logo.png";
import tabletop_logo from "../assets/tabletopapp.png";

const projects = [
	{
		name: "ai-football-highlights-metahub",
		role: ["Frontend Developer", "Backend Developer"],
		description:
			"A web application for football that automatically processes videos to create highlights, enabling users to view these generated highlights.",
		tenure: "enygma.ai",
		dateStart: "2024-11-01",
		launchStatus: "Deployment - Client's Project",
		logoURL: metahub_logo,
		url: "https://enygma.ai/",
		stacks: [
			"Nuxt.js",
			"Typescript",
			"Tailwind CSS",
			"vuejs",
			"django rest",
			"aws",
			"docker",
		].map((item) => getTool(item)),
	},
	{
		name: "Ocular Predictor",
		role: ["Machine Learning Developer"],
		description:
			"Create a machine learning model that can differentiate between cataract and normal fundus through image analysis. This includes preprocessing steps to normalize the sizes of the images.",
		tenure: "enygma.ai",
		dateStart: "2019-01-01",
		launchStatus: "Finished - Personal Project",
		logoURL: enygma_logo,
		stacks: ["Python", "Pytorch"].map((item) => getTool(item)),
	},
	{
		name: "TableTopApp",
		role: ["Mobile Developer"],
		description:
			"Create a cross-platform mobile app for iOS and Android that enables users to discover nearby restaurants and view live foot traffic using a gallery connected to the businesses' CCTV.",
		tenure: "dreamscape",
		dateStart: "2019-01-01",
		launchStatus: "Ongoing - Client's Project",
		logoURL: tabletop_logo,
		stacks: ["Typescript", "aws amplify", "ios", "android", "graphql"].map(
			(item) => getTool(item)
		),
	},
];

export const getProjects = () => {
	return projects;
};
