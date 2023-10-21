import { twMerge } from "tailwind-merge";

export type TimelineLabelProps = React.ComponentProps<"div"> & {
	text: string;
};

export default function Label({ text, className, ...rest }: TimelineLabelProps) {
	return (
		<div
			className={twMerge("not-prose rounded-lg bg-green-400 bg-gradient-to-br from-emerald-400", className)}
			{...rest}
		>
			<p className="px-3 py-1 font-mono text-base font-semibold text-neutral-800">{text}</p>
		</div>
	);
}
