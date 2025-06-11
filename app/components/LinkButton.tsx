import { Link, type LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

export interface LinkButtonProps extends LinkProps {
	text: string;
}

export default function LinkButton({ text, className, ...rest }: LinkButtonProps) {
	return (
		<Link
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
