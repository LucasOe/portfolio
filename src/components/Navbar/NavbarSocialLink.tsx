import { IconContext } from "react-icons";
import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type NavbarSocialLinkProps = React.ComponentProps<typeof HashLink> & {
	text: string;
	icon?: React.ReactNode;
	to: string;
};

export default function NavbarSocialLink({ icon, to, className, ...rest }: NavbarSocialLinkProps) {
	return (
		<HashLink
			to={to}
			smooth
			target="_blank"
			rel="noreferrer"
			className={twMerge("focus p-2 no-underline outline-hidden", className)}
			{...rest}
		>
			<IconContext value={{ className: "size-6 hover:text-accent-pink" }}>{icon}</IconContext>
		</HashLink>
	);
}
