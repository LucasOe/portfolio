import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";
import LinkNavbar from "./LinkNavbar";

type LinksProps = {
	onClick?: () => void;
};

function Links({ onClick }: LinksProps) {
	return (
		<>
			<LinkNavbar text="about" to="#about" slashes onClick={onClick} />
			<LinkNavbar text="projects" to="#projects" slashes onClick={onClick} />
			<LinkNavbar text="skills" to="#skills" slashes onClick={onClick} />
			<LinkNavbar text="contact" to="#contact" slashes onClick={onClick} />
		</>
	);
}

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const closeNavbar = () => setNavbarOpen(false);

	useEffect(() => {
		window.addEventListener("resize", closeNavbar);
		window.addEventListener("scroll", closeNavbar);
		return () => {
			window.removeEventListener("resize", closeNavbar);
			window.removeEventListener("scroll", closeNavbar);
		};
	}, []);

	return (
		<div>
			<div className="my-6 flex justify-between">
				{/* Hamburger Menu */}
				<div className="block md:hidden">
					<button className="focus block rounded-md" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
						<IconContext.Provider value={{ className: "w-8 h-8" }}>
							{navbarOpen ? <FiX /> : <FiMenu />}
						</IconContext.Provider>
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
			{navbarOpen && (
				<div className="flex gap-3 md:hidden">
					<div className="block w-1 rounded-full bg-neutral-500" />
					<div className="flex flex-col gap-y-2">
						<Links onClick={closeNavbar} />
					</div>
				</div>
			)}
		</div>
	);
}
