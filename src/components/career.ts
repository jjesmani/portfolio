import { getTool } from "./toolbelt";
import enygma_logo from "../assets/enygma_logo.png";
import asu_logo from "../assets/ASU-logo.png";

const career = [
	{
		company: "enygma.ai",
		position: "Fullstack Intern + ML Developer",
		url: "https://enygma.ai/",
		start: "January 2024",
		end: "Present",
		logo: enygma_logo,
		description:
			"Developed the front-end and back-end for ai-football-highlights-metahub, contributed to integrating the web application with the machine learning model, and assisted in deploying the backend and ML model on AWS (EC2, ECS, ECR, S3).",
		stacks: [
			"Nuxt.js",
			"vuejs",
			"django rest",
			"Typescript",
			"aws",
			"Tailwind CSS",
			"Github",
			"docker",
		].map((item) => getTool(item)),
	},
	{
		company: "Arizona State University",
		position: "UI/UX Teaching Assistants",
		url: "https://www.asu.edu/",
		start: "January 2024",
		end: "Present",
		logo: asu_logo,
		description:
			"Assisted the professor in teaching the Human Computer Interaction course, helping students with AB testing, exams, assignments, and quizzes.",
		stacks: ["figma", "Github"].map((item) => getTool(item)),
	},
];

export const getCareer = () => {
	return career;
};
