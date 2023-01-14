import { Link } from "react-router-dom";

type LinkButtonProps = {
	link: string;
	text: string;
	className?: string;
};

export default function LinkButton({ link, text, className }: LinkButtonProps) {
	return (
		<Link to={link} className={`${className} inline-block`}>
			<div className="rounded-full bg-neutral-200 p-2 opacity-80 hover:opacity-100">
				<p className="px-5 font-medium text-neutral-900">{text}</p>
			</div>
		</Link>
	);
}
