import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

import type { HashLinkProps } from "react-router-hash-link";

export interface NavbarLinkProps extends HashLinkProps {
	text: string;
	to: string;
}

export default function NavbarLink({ text, to, className, ...rest }: NavbarLinkProps) {
	return (
		<HashLink
			to={to}
			smooth
			target="_self"
			rel="noreferrer"
			className={twMerge("focus p-2 no-underline outline-hidden", className)}
			{...rest}
		>
			<span className="hover:text-gradient font-mono text-lg font-semibold">{`//${text}`}</span>
		</HashLink>
	);
}
