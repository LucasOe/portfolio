export default function ContactForm() {
	return (
		<div>
			<form
				action="https://api.web3forms.com/submit"
				method="POST"
				autoComplete="off"
				className="flex flex-col gap-3"
			>
				<input type="hidden" name="access_key" value="25c35d2c-79c0-4598-a197-ef792d2b34a2" />
				<input type="hidden" name="redirect" value="https://lucasoe.com/success" />
				<div className="flex flex-col gap-3 sm:flex-row">
					<label className="w-full">
						<span className="pl-1 font-bold text-neutral-100">Name</span>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter Your Name"
							required
							className="form"
						/>
					</label>
					<label className="w-full">
						<span className="pl-1 font-bold text-neutral-100">E-Mail</span>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your E-Mail"
							required
							className="form"
						/>
					</label>
				</div>
				<label className="w-full">
					<span className="pl-1 font-bold text-neutral-100">Message</span>
					<textarea
						name="message"
						id="message"
						placeholder="Enter Your Message"
						rows={8}
						required
						className="form resize-none"
					/>
				</label>
				<button type="submit" className="focus button self-end">
					Send Message
				</button>
			</form>
		</div>
	);
}
