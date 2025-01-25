import { twMerge } from "tailwind-merge";

export interface TimelineLabelProps extends React.ComponentProps<"div"> {
	text: string;
}

export default function Label({ text, className, ...rest }: TimelineLabelProps) {
	return (
		<div className={twMerge("rounded-lg border-[3px] border-neutral-300", className)} {...rest}>
			<p className="px-3 py-1 font-mono text-base font-bold">{text}</p>
		</div>
	);
}
