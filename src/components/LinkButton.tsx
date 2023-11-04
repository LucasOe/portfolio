import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type LinkButtonProps = React.ComponentProps<typeof HashLink> & {
	text: string;
	to: string;
};

export default function LinkButton({ text, to, className, ...rest }: LinkButtonProps) {
	return (
		<HashLink
			to={to}
			className={twMerge(
				"not-prose focus focus-neutral-300 inline-block rounded-lg bg-neutral-300 p-1 hover:bg-neutral-100 text-neutral-900 font-medium px-5 no-underline outline-none",
				className
			)}
			{...rest}
		>
			{text}
		</HashLink>
	);
}
