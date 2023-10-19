export type ContactTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
	text: string;
	name: string;
};

export default function ContactTextArea({ text, name, className, ...rest }: ContactTextareaProps) {
	return (
		<div className={`w-full ${className}`}>
			<label htmlFor={name} className="pl-1 font-bold">
				{text}
			</label>
			<textarea
				id={name}
				name={name}
				placeholder={`Enter your ${text}`}
				required
				className="focus w-full resize-none rounded-md border-none bg-neutral-700 text-neutral-200 placeholder:text-neutral-500"
				{...rest}
			/>
		</div>
	);
}
