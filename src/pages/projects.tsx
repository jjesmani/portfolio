import { useEffect, useState } from "react";
import { getProjects } from "../components/project";
import { twMerge } from "tailwind-merge";
import { useLottie } from "lottie-react";

export default function Projects() {
	const [lottieData, setLottieData] = useState<any>(null);
	const projects = getProjects();
	const style = {
		height: 300,
	};

	useEffect(() => {
		document.title = "Projects - My Portfolio";
		const loadLottieData = async () => {
			const data = await import("../animation/projectLottie.json");
			setLottieData(data.default);
		};
		loadLottieData();
	}, []);

	const options = {
		animationData: lottieData,
		loop: true,
		autoplay: true,
	};

	const { View } = useLottie(options, style);

	return (
		<>
			{View}
			<h1 className="text-center mb-8">Projects</h1>
			<div className="flex flex-col gap-12 text-center">
				{projects.map((project) => (
					<div
						key={project.name}
						className="flex flex-col items-center gap-2"
					>
						<div className="w-[250px] h-[100px] relative">
							<img
								src={project.logoURL}
								alt={project.name}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "contain",
								}}
							/>
						</div>
						<h2 className="text-2xl">{project.name}</h2>
						<p>Status: {project.launchStatus}</p>
						<p>Role: {project.role.join(", ")}</p>
						<p className="text-lg">{project.description}</p>
						<div className="flex flex-row flex-wrap gap-4">
							{project.stacks.map(
								(tool) =>
									tool && (
										<div
											data-tool={tool.id}
											className={twMerge(
												"text-3xl text-slate-500 transition-all",
												tool.className
											)}
											key={project.name + tool.title}
										>
											{/* Assuming `tool.icon` is a React component or JSX */}
											{tool.icon}
										</div>
									)
							)}
						</div>
						<hr className="w-full mt-4" />
					</div>
				))}
			</div>
		</>
	);
}
