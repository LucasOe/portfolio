import { twMerge } from "tailwind-merge";

export type ContactInputProps = React.ComponentProps<"input"> & {
	text: string;
	name: string;
	type: string;
};

export default function ContactInput({ text, type, name, className, ...rest }: ContactInputProps) {
	return (
		<div className={twMerge("w-full", className)}>
			<label htmlFor={name} className="pl-1 font-bold">
				{text}
			</label>
			<input
				id={name}
				type={type}
				name={name}
				placeholder={`Enter your ${text}`}
				autoComplete={name}
				required
				className="focus w-full rounded-md border-none bg-neutral-700 placeholder:text-neutral-500"
				{...rest}
			/>
		</div>
	);
}
