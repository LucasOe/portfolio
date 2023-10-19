import { HashLink } from "react-router-hash-link";

export type LinkButtonProps = React.ComponentProps<typeof HashLink> & {
	text: string;
	to: string;
};

export default function LinkButton({ text, to, className, ...rest }: LinkButtonProps) {
	return (
		<HashLink to={to} className={`not-prose focus button ${className}`} {...rest}>
			{text}
		</HashLink>
	);
}
