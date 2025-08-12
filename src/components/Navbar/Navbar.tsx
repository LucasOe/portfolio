import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faBluesky, faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { LinkProps } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import type { HTMLMotionProps } from "motion/react";
import { AnimatePresence, motion, stagger } from "motion/react";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface TextLink extends LinkProps {
	text: string;
}

export interface SocialLink {
	text: string;
	icon: IconDefinition;
	to: string;
}

export type NavbarProps = HTMLMotionProps<"nav">;

const links: TextLink[] = [
	{ text: "about", to: "/", hash: "about" },
	{ text: "projects", to: "/", hash: "projects" },
	{ text: "skills", to: "/", hash: "skills" },
	{ text: "contact", to: "/", hash: "contact" },
];

const socials: SocialLink[] = [
	{ text: "Github", icon: faGithub, to: "https://github.com/LucasOe" },
	{ text: "Bluesky", icon: faBluesky, to: "https://bsky.app/profile/lucasoe.com" },
	{ text: "LinkedIn", icon: faSquareLinkedin, to: "https://www.linkedin.com/in/lucasoe/" },
];

export default function Navbar({ className, ...rest }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsMenuOpen(false);
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("resize", handleScroll);
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("resize", handleScroll);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<motion.nav
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			className={twMerge(
				"bg-primary/80 fixed top-0 left-0 z-50 w-full p-4 backdrop-blur-md transition-all duration-300",
				isScrolled ? "border-secondary border-b" : "border-b border-transparent",
				className
			)}
			{...rest}
		>
			<div className="flex h-8 items-center justify-between">
				{/* Hamburger Menu */}
				<div className="h-full md:hidden">
					<motion.button
						aria-label="Open Navigation Menu"
						className="focus h-full rounded-md"
						onTap={() => setIsMenuOpen(!isMenuOpen)}
						whileTap={{ scale: 0.8 }}
					>
						<FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="xl" />
					</motion.button>
				</div>
				{/* Site Links */}
				<div className="hidden md:block">
					<div className="flex flex-wrap gap-x-4">
						{links.map((link) => (
							<Link
								key={link.text}
								to={link.to}
								hash={link.hash}
								className="focus p-2 text-lg no-underline outline-hidden"
							>
								<span className="hover:text-gradient font-mono font-semibold">{`//${link.text}`}</span>
							</Link>
						))}
					</div>
				</div>
				{/* Social Links */}
				<div className="flex flex-wrap">
					{socials.map((social) => (
						<a key={social.text} href={social.to} className="focus p-2 no-underline outline-hidden">
							<FontAwesomeIcon icon={social.icon} size="xl" className="hover:text-accent-pink" />
						</a>
					))}
				</div>
			</div>
			{/* Collapsable Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<div className="mt-6 md:hidden">
						<motion.div
							initial="closed"
							animate="open"
							exit="closed"
							variants={{
								open: {
									transition: {
										delayChildren: stagger(0.05, { from: "first" }),
									},
								},
								closed: {
									transition: {
										delayChildren: stagger(0.05, { from: "last" }),
									},
								},
							}}
						>
							{links.map((link) => (
								<motion.div
									key={link.text}
									variants={{
										open: { opacity: 1, x: 0 },
										closed: { opacity: 0, x: -10 },
									}}
									className="flex flex-col gap-y-4"
								>
									<Link to={link.to} className="focus p-2 text-xl no-underline outline-hidden">
										<span className="hover:text-gradient font-mono font-semibold">
											{`//${link.text}`}
										</span>
									</Link>
								</motion.div>
							))}
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
