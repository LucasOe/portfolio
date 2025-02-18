import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiBlueskyFill } from "react-icons/ri";
import { Outlet } from "react-router";
import { ClientOnly } from "remix-utils/client-only";

import Footer from "../components/Footer";
import Navbar, { type TextLink } from "../components/Navbar/Navbar.client";

export default function Layout() {
	const links: TextLink[] = [
		{ text: "about", to: "/#about" },
		{ text: "projects", to: "/#projects" },
		{ text: "skills", to: "/#skills" },
		{ text: "contact", to: "/#contact" },
	];
	const socials: TextLink[] = [
		{ text: "Github", icon: <FaGithub />, to: "https://github.com/LucasOe" },
		{ text: "Bluesky", icon: <RiBlueskyFill />, to: "https://bsky.app/profile/lucasoe.com" },
		{ text: "LinkedIn", icon: <FaLinkedin />, to: "https://www.linkedin.com/in/lucasoe/" },
	];

	return (
		<>
			<div className="absolute top-0 left-0 w-full">
				<ClientOnly>{() => <Navbar links={links} socials={socials} />}</ClientOnly>
			</div>
			<Outlet />
			<div className="absolute bottom-0 left-0 w-full">
				<Footer />
			</div>
		</>
	);
}
