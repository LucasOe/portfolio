import Button from "@/components/Button";
import ContactInput from "@/components/Contact/ContactInput";
import ContactTextarea from "@/components/Contact/ContactTextarea";

export type ContactProps = React.ComponentProps<"form">;

export default function Contact({ className, ...rest }: ContactProps) {
	return (
		<div className={className}>
			<form
				action="https://api.web3forms.com/submit"
				method="POST"
				autoComplete="off"
				className="flex max-w-none flex-col gap-3"
				{...rest}
			>
				<input type="hidden" name="access_key" value="25c35d2c-79c0-4598-a197-ef792d2b34a2" />
				<input type="hidden" name="redirect" value="https://lucasoe.com/success" />
				<div className="prose prose-lg max-w-none">
					<div className="flex flex-col gap-3 sm:flex-row">
						<ContactInput text="Name" name="name" type="text" />
						<ContactInput text="E-Mail" name="email" type="email" />
					</div>
					<ContactTextarea text="Message" name="message" rows={8} />
				</div>
				<Button type="submit" className="self-end">
					Send Message
				</Button>
			</form>
		</div>
	);
}
