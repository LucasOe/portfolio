import { twMerge } from "tailwind-merge";

export type ContactTextareaProps = React.ComponentProps<"textarea"> & {
	text: string;
	name: string;
};

export default function ContactTextArea({ text, name, className, ...rest }: ContactTextareaProps) {
	return (
		<div className={twMerge("w-full", className)}>
			<label htmlFor={name} className="inline-block p-1 font-bold">
				{text}
			</label>
			<textarea
				id={name}
				name={name}
				placeholder={`Enter your ${text}`}
				required
				className="focus-secondary w-full resize-none rounded-lg border-none bg-secondary placeholder:text-neutral-500"
				{...rest}
			/>
		</div>
	);
}
