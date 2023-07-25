import { HashLink } from "react-router-hash-link";

type LinkButtonProps = {
	link: string;
	text: string;
	className?: string;
};

export default function LinkButton({ link, text, className }: LinkButtonProps) {
	return (
		<HashLink to={link} className={`${className} not-prose focus button`}>
			{text}
		</HashLink>
	);
}
