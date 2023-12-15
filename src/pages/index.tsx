import { useEffect, useRef } from "react";
import Default from "../components/Layouts/Default";
import { FaReact, FaGithub, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiAwsamplify,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import * as THREE from "three";
import Timeline from "../components/Timeline";
import earthbump from "../assets/earthbump.jpg";
import earthcloud from "../assets/earthCloud.png";
import earthmap from "../assets/earthmap1k.jpg";

const Home = () => {
  const animationContainerRef = useRef<HTMLDivElement>(null);
  console.log("index.tsx");

  useEffect(() => {
    if (!animationContainerRef.current) {
      return;
    }

    const scene = new THREE.Scene();

    const width = animationContainerRef.current.clientWidth;
    const height = animationContainerRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 1.75;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.autoClear = false;

    const geometry = new THREE.SphereGeometry(0.6, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    const material = new THREE.MeshStandardMaterial({
      color: "white",
      roughness: 1,
      metalness: 0,
      map: textureLoader.load(earthmap),
      bumpMap: textureLoader.load(earthbump),
      bumpScale: 0.3,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.x += 0.001;
      earth.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientlight);

    const pointerlight = new THREE.PointLight(0xffffff, 0.9);
    pointerlight.position.set(5, 3, 5);
    scene.add(pointerlight);

    const cloudgeometry = new THREE.SphereGeometry(0.63, 32, 32);

    const cloudmaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load(earthcloud),
      transparent: true,
    });

    const cloudmesh = new THREE.Mesh(cloudgeometry, cloudmaterial);
    scene.add(cloudmesh);

    animate();

    animationContainerRef.current.appendChild(renderer.domElement);

    return () => {
      if (animationContainerRef.current) {
        animationContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return (
    <>
      <div
        ref={animationContainerRef}
        className="text-center flex items-center justify-center h-80"
      ></div>
      <div className="text-center my-8">
        <h4 className="text-2xl font-bold pb-2">Hello and Greetings!</h4>
        <h1 className="text-5xl font-bold">
          My name is{" "}
          <span className="bg-my-gradient bg-clip-text text-transparent">
            Jismi Jesmani
          </span>
        </h1>
        <h4 className="text-2xl font-bold">
          and I'm your{" "}
          <span className="px-2 py-0.4 pb-1.5 bg-introduction-box-bg-color overflow-hidden text-white rounded">
            digital crafting partner ✨
          </span>
        </h4>
      </div>
      <div className="border border-zinc-200 rounded px-4.5 py-4 my-8 text-center text-xl font-bold">
        My go-to toolbelt
        <div className="flex flex-row flex-wrap items-center justify-center my-8 text-zinc-500 gap-5">
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:rotate-360 hover:text-react-color transition-all duration-500 ease-in-out text-zinc-500">
              <FaReact />
            </div>
            React
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-typescript-color transition-all duration-500 ease-in-out text-zinc-500">
              <SiTypescript />
            </div>
            Typescript
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:rotate-360 hover:text-react-color transition-all duration-500 ease-in-out text-zinc-500">
              <SiTailwindcss />
            </div>
            TailwindCSS
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-orange-500 transition-all duration-500 ease-in-out text-zinc-500">
              <SiAwsamplify />
            </div>
            Amplify
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-github-color transition-all duration-500 ease-in-out text-zinc-500">
              <FaGithub />
            </div>
            GitHub
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-github-color transition-all duration-500 ease-in-out text-zinc-500">
              <SiNextdotjs />
            </div>
            Next.js
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-github-color transition-all duration-500 ease-in-out text-zinc-500">
              <SiExpress />
            </div>
            Express.js
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-nodejs-color transition-all duration-500 ease-in-out text-zinc-500">
              <FaNodeJs />
            </div>
            Node.js
          </div>
          <div className="flex flex-col text-center items-center w-[10ch] gap-4 hover:text-zinc-800 transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-center text-5xl mb-3 hover:scale-125 hover:text-github-color transition-all duration-500 ease-in-out text-zinc-500">
              <FaFigma />
            </div>
            Figma
          </div>
        </div>
      </div>
      <div>
        <Timeline />
      </div>
    </>
  );
};

export default Home;
