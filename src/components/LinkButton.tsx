import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type LinkButtonProps = React.ComponentProps<typeof HashLink> & {
	text: string;
	to: string;
};

export default function LinkButton({ text, to, className, ...rest }: LinkButtonProps) {
	return (
		<HashLink to={to} className={twMerge("not-prose focus-primary button", className)} {...rest}>
			{text}
		</HashLink>
	);
}
