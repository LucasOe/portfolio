export type ContactTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	text: string;
	name: string;
};

export default function ContactInput({ text, name, className, ...rest }: ContactTextareaProps) {
	return (
		<label className={`w-full ${className}`}>
			<span className="pl-1 font-bold">{text}</span>
			<textarea
				name={name}
				placeholder={`Enter your ${text}`}
				required
				className="focus w-full resize-none rounded-md border-none bg-neutral-700 text-neutral-200 placeholder:text-neutral-500"
				{...rest}
			/>
		</label>
	);
}
