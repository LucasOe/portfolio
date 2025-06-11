import { IconContext } from "react-icons";
import { Link, type LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

export interface NavbarSocialLinkProps extends LinkProps {
	text: string;
	icon?: React.ReactNode;
}

export default function NavbarSocialLink({ icon, className, ...rest }: NavbarSocialLinkProps) {
	return (
		<Link
			target="_blank"
			rel="noreferrer"
			className={twMerge("focus p-2 no-underline outline-hidden", className)}
			{...rest}
		>
			<IconContext value={{ className: "size-6 hover:text-accent-pink" }}>{icon}</IconContext>
		</Link>
	);
}
