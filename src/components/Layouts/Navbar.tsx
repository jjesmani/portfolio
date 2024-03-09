import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navLinkClass = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "border-r-4 border-blue-800 text-blue-800 flex flex-row gap-4 justify-end transition-all duration-300 ease-in-out text-right pr-6 py-2"
			: "border-r-4 border-black hover:text-blue-800 hover:border-blue-500 flex flex-row gap-4 justify-end transition-all duration-300 ease-in-out text-right pr-6 py-2";

	return (
		<section className="flex flex-col justify-end w-[250px] transition-all overflow-y-auto sticky top-0 left-0 max-h-[92vh] px-4 py-20 gap-8">
			<nav className="font-bold text-lg">
				<ul className="flex flex-col">
					<NavLink to="/" className={navLinkClass}>
						<li>Home</li>
					</NavLink>
					<NavLink to="/about" className={navLinkClass}>
						<li>About Me</li>
					</NavLink>
					<NavLink to="/projects" className={navLinkClass}>
						<li>Projects</li>
					</NavLink>
					<NavLink to="/blogs" className={navLinkClass}>
						<li>Blogs</li>
					</NavLink>
				</ul>
			</nav>
			<div className="flex flex-row gap-2 items-center justify-end">
				<a href="https://github.com/jjesmani" target="blank">
					<div className="text-3xl text-slate-500 hover:text-slate-900 p-1 transition-all duration-300 ease-in-out">
						<AiFillGithub />
					</div>
				</a>
				<a href="mailto:your-email@gmail.com">
					<div className="text-3xl text-slate-500 hover:text-slate-900 p-1 transition-all duration-300 ease-in-out">
						<BiLogoGmail />
					</div>
				</a>
				<a href="https://www.linkedin.com/in/jismi-jesmani-2b9942204">
					<div className="text-3xl text-slate-500 hover:text-slate-900 p-1 transition-all duration-300 ease-in-out">
						<IoLogoLinkedin />
					</div>
				</a>
			</div>
		</section>
	);
};

export default Navbar;
