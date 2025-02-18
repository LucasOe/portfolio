import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

import type { LinkProps } from "react-router";

export interface LinkButtonProps extends LinkProps {
	text: string;
	to: string;
}

export default function LinkButton({ text, to, className, ...rest }: LinkButtonProps) {
	return (
		<Link
			to={to}
			className={twMerge(
				"focus inline-block rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-900 no-underline outline-hidden hover:bg-neutral-100",
				className
			)}
			{...rest}
		>
			{text}
		</Link>
	);
}
