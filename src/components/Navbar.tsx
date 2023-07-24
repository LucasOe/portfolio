import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";
import LinkNavbar from "./LinkNavbar";

const links = [
	{ text: "about", to: "/#about" },
	{ text: "projects", to: "/#projects" },
	{ text: "skills", to: "/#skills" },
	{ text: "contact", to: "/#contact" },
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
		<div className="absolute top-0 my-6 w-full">
			<div className="flex justify-between">
				{/* Hamburger Menu */}
				<div className="block md:hidden">
					<motion.button
						className="focus block rounded-md"
						onTap={() => setNavbarOpen(!navbarOpen)}
						whileTap={{ scale: 0.8 }}
					>
						<IconContext.Provider value={{ className: "w-8 h-8" }}>
							{navbarOpen ? <FiX /> : <FiMenu />}
						</IconContext.Provider>
					</motion.button>
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
					<div className="flex flex-col gap-y-2 text-[1.35rem] md:hidden">
						<motion.div
							initial="closed"
							animate="open"
							exit="closed"
							variants={{
								open: {
									transition: {
										staggerChildren: 0.05,
										staggerDirection: 1,
									},
								},
								closed: {
									transition: {
										staggerChildren: 0.05,
										staggerDirection: -1,
									},
								},
							}}
						>
							{links.map((link, index) => (
								<motion.div
									key={index}
									variants={{
										open: { opacity: 1, x: 0 },
										closed: { opacity: 0, x: -10 },
									}}
								>
									<LinkNavbar text={link.text} to={link.to} onClick={closeNavbar} slashes />
								</motion.div>
							))}
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
