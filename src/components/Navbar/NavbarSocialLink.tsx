import { IconContext } from "react-icons";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

import type { LinkProps } from "react-router";

export interface NavbarSocialLinkProps extends LinkProps {
	text: string;
	icon?: React.ReactNode;
	to: string;
}

export default function NavbarSocialLink({ icon, to, className, ...rest }: NavbarSocialLinkProps) {
	return (
		<Link
			to={to}
			target="_blank"
			rel="noreferrer"
			className={twMerge("focus p-2 no-underline outline-hidden", className)}
			{...rest}
		>
			<IconContext value={{ className: "size-6 hover:text-accent-pink" }}>{icon}</IconContext>
		</Link>
	);
}
