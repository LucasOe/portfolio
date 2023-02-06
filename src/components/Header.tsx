type HeaderProps = {
	text: string;
	id: string;
};

export default function Header({ text, id }: HeaderProps) {
	return (
		<h2 id={id} className="mt-24 scroll-m-[12vh] font-mono">
			{`# ${text}`}
		</h2>
	);
}
