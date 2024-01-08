import { useEffect, useState } from "react";
import profilepicture from "../assets/profilePic.jpg";
// import Timeline from "../components/Timeline";
import { useLottie } from "lottie-react";
import Stacks from "../components/Stacks";

export default function Aboutme() {
  const [lottieData, setLottieData] = useState<any>(null);

  useEffect(() => {
    document.title = "AboutMe - My Portfolio";
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
        <h1 className="text-5xl font-bold pb-1">I'm Jay</h1>
        <h3 className="text-3xl font-bold">And this is my journey!</h3>
      </div>
      <div className="my-8">
        <p>
          Hello! I'm a dedicated student at Arizona State University, where I'm
          pursuing a major in Software Engineering. While I may not have
          extensive experience with company projects, I've actively engaged in
          several side projects during my academic journey. These projects have
          allowed me to develop a solid foundation in several key technologies.
        </p>
        <br />
        <p>
          My technical proficiency primarily lies in the MERN stack, where I've
          developed a strong command over React.js, Node.js, MongoDB, and
          Express.js. These tools have been instrumental in my project work,
          enabling me to build dynamic and efficient web applications.
        </p>
        <br />
        <p>
          I've also dabbled in cloud computing, gaining practical experience
          with Amazon Web Services (AWS) in one of my projects. This experience
          has been pivotal in understanding the scalability and robustness
          required in modern web applications.
        </p>
        <br />
        <p>
          Looking ahead, I am excited about the prospect of diving deeper into
          web development. I am particularly fascinated by the ever-evolving
          landscape of cybersecurity. This interest is more than a passing
          curiosity; I am committed to pursuing a master's degree in
          Cybersecurity. I believe that blending web development skills with a
          strong understanding of cybersecurity principles will allow me to
          contribute significantly to the tech world.
        </p>
        <br />
        <p>
          Through my portfolio, I hope to showcase my journey, the skills I've
          honed, and the passion I bring to every project. Thank you for taking
          the time to learn about me!
        </p>
      </div>
      <Stacks />
    </>
  );
}
