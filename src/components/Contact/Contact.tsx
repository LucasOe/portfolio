import ContactInput from "@/components/Contact/ContactInput";
import ContactTextarea from "@/components/Contact/ContactTextarea";

export type ContactProps = React.ComponentProps<"div">;

export default function Contact({ className }: ContactProps) {
	return (
		<div className={className}>
			<form
				action="https://api.web3forms.com/submit"
				method="POST"
				autoComplete="off"
				className="flex flex-col gap-3"
			>
				<input type="hidden" name="access_key" value="25c35d2c-79c0-4598-a197-ef792d2b34a2" />
				<input type="hidden" name="redirect" value="https://lucasoe.com/success" />
				<div className="flex flex-col gap-3 sm:flex-row">
					<ContactInput text="Name" name="name" type="text" />
					<ContactInput text="E-Mail" name="email" type="email" />
				</div>
				<ContactTextarea text="Message" name="message" rows={8} />
				<button type="submit" className="focus button self-end">
					Send Message
				</button>
			</form>
		</div>
	);
}
