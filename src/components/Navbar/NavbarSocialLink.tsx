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
			className={twMerge("focus outline-hidden px-2 no-underline", className)}
			{...rest}
		>
			<IconContext.Provider value={{ className: "size-6 hover:text-accent-pink" }}>{icon}</IconContext.Provider>
		</HashLink>
	);
}
