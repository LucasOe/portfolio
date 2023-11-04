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
			className={twMerge("focus rounded-sm no-underline outline-none px-2", className)}
			{...rest}
		>
			<span className="font-mono font-semibold hover:bg-accent-violet hover:bg-gradient-to-bl hover:from-accent-pink hover:bg-cover hover:bg-clip-text hover:text-transparent">{`${
				slashes ? "//" : ""
			}${text}`}</span>
		</HashLink>
	);
}
