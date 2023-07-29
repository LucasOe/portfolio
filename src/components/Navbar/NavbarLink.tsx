import { HashLink } from "react-router-hash-link";

export type NavbarLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
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
			className={`focus rounded-sm leading-none no-underline outline-none ${className}`}
			{...rest}
		>
			<span className="font-mono font-semibold hover:text-green-400">{`${slashes ? "//" : ""}${text}`}</span>
		</HashLink>
	);
}
