import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import Navbar, { type TextLink } from "@/components/Navbar/Navbar";

export default function Layout() {
	const links: TextLink[] = [
		{ text: "about", to: "/#about" },
		{ text: "projects", to: "/#projects" },
		{ text: "skills", to: "/#skills" },
		{ text: "contact", to: "/#contact" },
	];
	const socials: TextLink[] = [
		{ text: "Github", to: "https://github.com/LucasOe" },
		{ text: "Twitter", to: "https://twitter.com/_LucasOe_" },
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
