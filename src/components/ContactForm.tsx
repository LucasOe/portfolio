export default function ContactForm() {
	return (
		<div>
			<form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-2">
				<input type="hidden" name="access_key" value="25c35d2c-79c0-4598-a197-ef792d2b34a2" />
				<input type="hidden" name="redirect" value="https://web3forms.com/success" />
				<div className="flex gap-2">
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="w-full rounded-md border-none bg-neutral-700"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="E-Mail"
						className="w-full rounded-md border-none bg-neutral-700"
						required
					/>
				</div>
				<textarea
					name="message"
					placeholder="Message"
					rows={8}
					required
					className="w-full resize-none rounded-md border-none bg-neutral-700"
				/>
				<button type="submit" className="w-full rounded-md border-none bg-neutral-700">
					Submit
				</button>
			</form>
		</div>
	);
}
