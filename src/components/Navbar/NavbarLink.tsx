import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type NavbarLinkProps = React.ComponentProps<typeof HashLink> & {
	text: string;
	to: string;
	slashes?: boolean;
	newtab?: boolean;
};

export default function NavbarLink({ text, to, slashes, newtab, className, ...rest }: NavbarLinkProps) {
	return (
		<HashLink
			to={to}
			smooth
			target={newtab ? "_blank" : "_self"}
			rel="noreferrer"
			className={twMerge("focus rounded-sm leading-none no-underline outline-none", className)}
			{...rest}
		>
			<span className="font-mono font-semibold hover:text-accent-pink">{`${slashes ? "//" : ""}${text}`}</span>
		</HashLink>
	);
}
