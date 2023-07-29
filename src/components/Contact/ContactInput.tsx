export type ContactInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	text: string;
	name: string;
	type: string;
};

export default function ContactInput({ text, type, name, className, ...rest }: ContactInputProps) {
	return (
		<label className={`w-full ${className}`}>
			<span className="pl-1 font-bold">{text}</span>
			<input
				type={type}
				name={name}
				placeholder={`Enter your ${text}`}
				required
				className="focus w-full rounded-md border-none bg-neutral-700 placeholder:text-neutral-500"
				{...rest}
			/>
		</label>
	);
}
