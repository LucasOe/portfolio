type IconProps = {
	text: string;
	className?: string;
};

export default function Label({ text, className }: IconProps) {
	return (
		<div className={`${className} not-prose rounded-lg bg-green-400 bg-gradient-to-br from-emerald-400`}>
			<p className="m-0 px-3 py-1 font-mono text-base font-semibold text-neutral-800">{text}</p>
		</div>
	);
}
