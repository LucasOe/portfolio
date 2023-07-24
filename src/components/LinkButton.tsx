import { Link } from "react-router-dom";

type LinkButtonProps = {
	link: string;
	text: string;
	className?: string;
};

export default function LinkButton({ link, text, className }: LinkButtonProps) {
	return (
		<Link to={link} className={`${className} focus button`}>
			{text}
		</Link>
	);
}
