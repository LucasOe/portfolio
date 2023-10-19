import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";

import { FiMenu, FiX } from "react-icons/fi";

import NavbarLink from "@/components/Navbar/NavbarLink";

export type TextLink = {
	text: string;
	to: string;
};

export type NavbarProps = React.ComponentProps<"div"> & {
	links: TextLink[];
	socials: TextLink[];
};

export default function Navbar({ links, socials, className }: NavbarProps) {
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
		<div className={`not-prose absolute top-0 my-6 w-full ${className}`}>
			<div className="flex h-8 items-center justify-between">
				{/* Hamburger Menu */}
				<div className="h-full md:hidden">
					<motion.button
						aria-label="Open Navigation Menu"
						className="focus h-full rounded-md"
						onTap={() => setNavbarOpen(!navbarOpen)}
						whileTap={{ scale: 0.8 }}
					>
						<IconContext.Provider value={{ className: "h-full w-full" }}>
							{navbarOpen ? <FiX /> : <FiMenu />}
						</IconContext.Provider>
					</motion.button>
				</div>
				{/* Site Links */}
				<div className="hidden md:block">
					<div className="flex flex-wrap gap-x-8">
						{links.map((link, index) => (
							<NavbarLink key={index} text={link.text} to={link.to} slashes />
						))}
					</div>
				</div>
				{/* Social Links */}
				<div className="flex flex-wrap gap-x-8">
					{socials.map((social, index) => (
						<NavbarLink key={index} text={social.text} to={social.to} newtab />
					))}
				</div>
			</div>
			{/* Collapsable Menu */}
			<AnimatePresence>
				{navbarOpen && (
					<div className="mt-6 flex flex-col gap-y-2 text-[1.35rem] md:hidden">
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
									<NavbarLink text={link.text} to={link.to} onClick={closeNavbar} slashes />
								</motion.div>
							))}
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
