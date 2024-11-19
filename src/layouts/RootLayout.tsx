import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import Navbar, { type TextLink } from "@/components/Navbar/Navbar";

import { RiBlueskyFill } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Layout() {
	const links: TextLink[] = [
		{ text: "about", to: "/#about" },
		{ text: "projects", to: "/#projects" },
		{ text: "skills", to: "/#skills" },
		{ text: "contact", to: "/#contact" },
	];
	const socials: TextLink[] = [
		{ text: "Github", icon: <FaGithub />, to: "https://github.com/LucasOe" },
		{ text: "Twitter", icon: <FaTwitter />, to: "https://twitter.com/_LucasOe_" },
		{ text: "Bluesky", icon: <RiBlueskyFill />, to: "https://bsky.app/profile/lucasoe.com" },
		{ text: "LinkedIn", icon: <FaLinkedin />, to: "https://www.linkedin.com/in/lucasoe/" },
	];

	return (
		<>
			<div className="absolute left-0 top-0 w-full">
				<Navbar links={links} socials={socials} />
			</div>
			<Outlet />
			<div className="absolute bottom-0 left-0 w-full">
				<Footer />
			</div>
		</>
	);
}
