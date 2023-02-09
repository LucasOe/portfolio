import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";
import LinkNavbar from "./LinkNavbar";

const links = [
	{ text: "about", to: "#about" },
	{ text: "projects", to: "#projects" },
	{ text: "skills", to: "#skills" },
	{ text: "contact", to: "#contact" },
];
const socials = [
	{ text: "Github", to: "https://github.com/LucasOe" },
	{ text: "Twitter", to: "https://twitter.com/_LucasOe_" },
];

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
						{links.map((link, index) => (
							<LinkNavbar key={index} text={link.text} to={link.to} slashes />
						))}
					</div>
				</div>
				{/* Social Links */}
				<div className="flex flex-wrap items-center gap-x-8 text-lg">
					{socials.map((social, index) => (
						<LinkNavbar key={index} text={social.text} to={social.to} newtab />
					))}
				</div>
			</div>
			{/* Collapsable Menu */}
			<AnimatePresence>
				{navbarOpen && (
					<div className="flex gap-3 md:hidden">
						<motion.div
							className="block w-1 rounded-full bg-neutral-500"
							initial={{ opacity: 0 }}
							animate={{ opacity: 100 }}
							exit={{ opacity: 0 }}
						/>
						<div className="flex flex-col gap-y-2">
							<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
								{links.map((link, index) => (
									<LinkNavbar
										key={index}
										text={link.text}
										to={link.to}
										onClick={closeNavbar}
										slashes
									/>
								))}
							</motion.div>
						</div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
