export type HeaderProps = React.ComponentProps<"div"> & {
	text: string;
	id: string;
};

export default function Header({ text, id, className }: HeaderProps) {
	return (
		<h2 id={id} className={`mt-24 scroll-m-[12vh] font-mono ${className}`}>
			{`# ${text}`}
		</h2>
	);
}
