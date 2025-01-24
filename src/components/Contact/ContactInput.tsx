import { twMerge } from "tailwind-merge";

export type ContactInputProps = React.ComponentProps<"input"> & {
	text: string;
	name: string;
	type: string;
};

export default function ContactInput({ text, type, name, className, ...rest }: ContactInputProps) {
	return (
		<div className={twMerge("w-full", className)}>
			<label htmlFor={name} className="inline-block p-1 font-bold">
				{text}
			</label>
			<input
				id={name}
				type={type}
				name={name}
				placeholder={`Enter your ${text}`}
				autoComplete={name}
				required
				className="focus bg-secondary w-full rounded-lg border-none placeholder:text-neutral-500"
				{...rest}
			/>
		</div>
	);
}
