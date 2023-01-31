type IconProps = {
	text: string;
	className?: string;
};

export default function Label({ text, className }: IconProps) {
	return (
		<div className={`${className} rounded-md bg-neutral-200`}>
			<p className="m-0 px-2 font-mono font-bold text-neutral-700">{text}</p>
		</div>
	);
}
