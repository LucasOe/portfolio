import { FiMenu } from "react-icons/fi";
import LinkNavbar from "./LinkNavbar";

export default function Navbar() {
	return (
		<div className="my-6 flex justify-between">
			<div className="block md:hidden ">
				<FiMenu className="h-8 w-8" />
			</div>
			<div className="hidden md:block">
				<div className="flex flex-wrap gap-x-8 text-lg">
					<LinkNavbar text="about" to="#about" slashes />
					<LinkNavbar text="projects" to="#projects" slashes />
					<LinkNavbar text="skills" to="#skills" slashes />
					<LinkNavbar text="contact" to="#contact" slashes />
				</div>
			</div>
			<div className="flex flex-wrap items-center gap-x-8 text-lg">
				<LinkNavbar text="Github" to="https://github.com/LucasOe" newtab />
				<LinkNavbar text="Twitter" to="https://twitter.com/_LucasOe_" newtab />
			</div>
		</div>
	);
}
