import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

import type { LinkProps } from "react-router";

export interface NavbarLinkProps extends LinkProps {
	text: string;
	to: string;
}

export default function NavbarLink({ text, to, className, ...rest }: NavbarLinkProps) {
	return (
		<Link
			to={to}
			target="_self"
			rel="noreferrer"
			className={twMerge("focus p-2 text-lg no-underline outline-hidden", className)}
			{...rest}
		>
			<span className="hover:text-gradient font-mono font-semibold">{`//${text}`}</span>
		</Link>
	);
}
