type LinkNavbarProps = {
	text: string;
	to: string;
	slashes?: boolean;
	newtab?: boolean;
};

export default function Label({ text, to, slashes, newtab }: LinkNavbarProps) {
	return (
		<div>
			<a
				href={to}
				target={newtab ? "_blank" : "_self"}
				rel="noreferrer"
				className="focus rounded-md no-underline outline-none"
			>
				<span className="font-mono font-semibold hover:text-green-400">
					{slashes && <>&#47;&#47;</>}
					{text}
				</span>
			</a>
		</div>
	);
}
