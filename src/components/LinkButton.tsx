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
				"focus inline-block rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-900 no-underline outline-hidden hover:bg-neutral-100",
				className
			)}
			{...rest}
		>
			{text}
		</HashLink>
	);
}
