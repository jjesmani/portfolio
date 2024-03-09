import { useEffect, useState } from "react";
import profilepicture from "../assets/profilePic.jpg";
import { useLottie } from "lottie-react";
import Stacks from "../components/stacks";
import Career from "./sections/career";

export default function Aboutme() {
	const [lottieData, setLottieData] = useState<any>(null);

	useEffect(() => {
		document.title = "About Me - My Portfolio";
		const loadLottieData = async () => {
			const data = await import("../animation/aboutLottie.json");
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
			<div className="text-center flex flex-col items-center ">
				{View}
				<img
					className="rounded-full w-48 h-48 object-cover overflow-hidden "
					src={profilepicture}
					alt="profile picture of me in flagstaff"
				/>
				<h1 className="pb-1">I'm Jay</h1>
				<h3>And this is my journey!</h3>
			</div>
			<div className="my-8">
				<p>
					I'm a final-year software engineering student with a passion
					for exploring new possibilities through the integration of
					Machine Learning and Web Applications. With a junior-level
					yet solid foundation in both front-end and back-end
					development, I'm excited to announce that I'm now a
					full-stack developer! My goal is to leverage cutting-edge
					technologies to create innovative solutions that enhance
					user experiences and drive business growth.
				</p>
			</div>
			<Stacks />
			<Career />
		</>
	);
}
