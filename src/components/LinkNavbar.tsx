import { HashLink } from "react-router-hash-link";

type LinkNavbarProps = {
	text: string;
	to: string;
	slashes?: boolean;
	newtab?: boolean;
	[prop: string]: unknown;
};

export default function LinkNavbar({ text, to, slashes, newtab, ...anchorProps }: LinkNavbarProps) {
	return (
		<div>
			<HashLink
				to={to}
				smooth
				target={newtab ? "_blank" : "_self"}
				rel="noreferrer"
				className="focus rounded-md no-underline outline-none"
				{...anchorProps}
			>
				<span className="font-mono font-semibold hover:text-green-400">{`${slashes ? "//" : ""}${text}`}</span>
			</HashLink>
		</div>
	);
}
