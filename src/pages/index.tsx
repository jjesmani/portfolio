import { useEffect, useState } from "react";
import { FaGithub, FaPython } from "react-icons/fa";
import {
	SiTypescript,
	SiTailwindcss,
	SiAmazonaws,
	SiNuxtdotjs,
} from "react-icons/si";
import { TbBrandDjango } from "react-icons/tb";
import Timeline from "../components/timeline";
import Icons from "../components/icons";
import { useLottie } from "lottie-react";

const Home = () => {
	const [lottieData, setLottieData] = useState<any>(null);

	useEffect(() => {
		document.title = "Home - My Portfolio";
		const loadLottieData = async () => {
			const data = await import("../animation/homeLottie.json");
			setLottieData(data.default);
		};
		loadLottieData();
	}, []);

	const options = {
		animationData: lottieData,
		loop: true,
		autoplay: true,
	};

	const style = {
		height: 300,
	};

	const { View } = useLottie(options, style);

	return (
		<>
			<section className="flex-1 px-6 flex flex-col">{View}</section>
			<div className="text-center my-4 mt-8">
				<h4 className="font-bold pb-2">Hello and Greetings!</h4>
				<h1 className="font-bold">
					My name is{" "}
					<span className="bg-my-gradient bg-clip-text text-transparent">
						Jismi Jesmani
					</span>
				</h1>
				<h4 className="font-bold">
					and I'm your{" "}
					<span className="px-2 py-0.4 pb-1.5 bg-introduction-box-bg-color overflow-hidden text-white rounded">
						digital crafting partner ✨
					</span>
				</h4>
			</div>
			<div className="border border-zinc-200 rounded px-4.5 py-4 my-8 text-center text-2xl font-bold">
				My go-to toolbelt
				<div className="flex flex-row flex-wrap items-center justify-center my-8 text-zinc-500 gap-5">
					<Icons
						icon={FaPython}
						text="Python"
						hoverColor="hover:text-python-color"
						animationType="hover:scale-125"
					/>
					<Icons
						icon={TbBrandDjango}
						text="Django REST"
						hoverColor="hover:text-django-color"
						animationType="hover:scale-125"
					/>
					<Icons
						icon={SiNuxtdotjs}
						text="Nuxt3.js"
						hoverColor="hover:text-nuxt-color"
						animationType="hover:scale-125"
					/>
					<Icons
						icon={SiTypescript}
						text="Typescript"
						hoverColor="hover:text-typescript-color"
						animationType="hover:scale-125"
					/>
					<Icons
						icon={SiTailwindcss}
						text="TailwindCSS"
						hoverColor="hover:text-react-color"
						animationType="hover:scale-125 hover:rotate-360"
					/>
					<Icons
						icon={SiAmazonaws}
						text="AWS"
						hoverColor="hover:text-aws-color"
						animationType="hover:scale-125"
					/>
					<Icons
						icon={FaGithub}
						text="GitHub"
						hoverColor="hover:text-github-color"
						animationType="hover:scale-125"
					/>
				</div>
			</div>
			<div>
				<Timeline />
			</div>
		</>
	);
};

export default Home;
