import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import LinkNavbar from "./LinkNavbar";

function Links() {
	return (
		<>
			<LinkNavbar text="about" to="#about" slashes />
			<LinkNavbar text="projects" to="#projects" slashes />
			<LinkNavbar text="skills" to="#skills" slashes />
			<LinkNavbar text="contact" to="#contact" slashes />
		</>
	);
}

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<div>
			<div className="my-6 flex justify-between">
				{/* Hamburger Menu */}
				<div className="block md:hidden">
					<button className="focus block rounded-md" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
						<FiMenu className={`h-8 w-8 ${navbarOpen && "hidden"}`} />
						<FiX className={`h-8 w-8 ${!navbarOpen && "hidden"}`} />
					</button>
				</div>
				{/* Site Links */}
				<div className="hidden md:block">
					<div className="flex flex-wrap gap-x-8 text-lg">
						<Links />
					</div>
				</div>
				{/* Social Links */}
				<div className="flex flex-wrap items-center gap-x-8 text-lg">
					<LinkNavbar text="Github" to="https://github.com/LucasOe" newtab />
					<LinkNavbar text="Twitter" to="https://twitter.com/_LucasOe_" newtab />
				</div>
			</div>
			{/* Collapsable Menu */}
			<div className={`flex gap-3 ${navbarOpen ? " flex" : " hidden"}`}>
				<div className="block w-1 rounded-full bg-neutral-500" />
				<div className="flex flex-col gap-y-2">
					<Links />
				</div>
			</div>
		</div>
	);
}
