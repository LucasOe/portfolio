import { Link, type LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

export interface NavbarLinkProps extends LinkProps {
	text: string;
}

export default function NavbarLink({ text, className, ...rest }: NavbarLinkProps) {
	return (
		<Link
			target="_self"
			rel="noreferrer"
			className={twMerge("focus p-2 text-lg no-underline outline-hidden", className)}
			{...rest}
		>
			<span className="hover:text-gradient font-mono font-semibold">{`//${text}`}</span>
		</Link>
	);
}
