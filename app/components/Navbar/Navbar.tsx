import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiMenu, FiX } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

import NavbarLink from "@/components/Navbar/NavbarLink";
import NavbarSocialLink from "@/components/Navbar/NavbarSocialLink";

export interface TextLink {
	text: string;
	icon?: React.ReactNode;
	to: string;
}

export interface NavbarProps extends React.ComponentProps<"div"> {
	links: TextLink[];
	socials: TextLink[];
}

export default function Navbar({ links, socials, className, ...rest }: NavbarProps) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	useEffect(() => {
		const closeNavbar = () => setNavbarOpen(false);

		window.addEventListener("resize", closeNavbar);
		window.addEventListener("scroll", closeNavbar);
		return () => {
			window.removeEventListener("resize", closeNavbar);
			window.removeEventListener("scroll", closeNavbar);
		};
	}, []);

	return (
		<div className={twMerge("w-full p-6", className)} {...rest}>
			<div className="flex h-8 items-center justify-between">
				{/* Hamburger Menu */}
				<div className="h-full md:hidden">
					<motion.button
						aria-label="Open Navigation Menu"
						className="focus h-full rounded-md"
						onTap={() => setNavbarOpen(!navbarOpen)}
						whileTap={{ scale: 0.8 }}
					>
						<IconContext value={{ className: "size-full" }}>
							{navbarOpen ? <FiX /> : <FiMenu />}
						</IconContext>
					</motion.button>
				</div>
				{/* Site Links */}
				<div className="hidden md:block">
					<div className="flex flex-wrap gap-x-4">
						{links.map((link) => (
							<NavbarLink key={link.to} text={link.text} to={link.to} />
						))}
					</div>
				</div>
				{/* Social Links */}
				<div className="flex flex-wrap">
					{socials.map((social) => (
						<NavbarSocialLink key={social.to} text={social.text} icon={social.icon} to={social.to} />
					))}
				</div>
			</div>
			{/* Collapsable Menu */}
			<AnimatePresence>
				{navbarOpen && (
					<div className="mt-6 md:hidden">
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
							{links.map((link) => (
								<motion.div
									key={link.to}
									variants={{
										open: { opacity: 1, x: 0 },
										closed: { opacity: 0, x: -10 },
									}}
									className="flex flex-col gap-y-4"
								>
									<NavbarLink text={link.text} to={link.to} className="text-xl" />
								</motion.div>
							))}
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
