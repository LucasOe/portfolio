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
						<span className="pl-1 font-bold">Name</span>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter Your Name"
							required
							className="w-full rounded-md border-none bg-neutral-700
							placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</label>
					<label className="w-full">
						<span className="pl-1 font-bold">E-Mail</span>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter Your E-Mail"
							required
							className="w-full rounded-md border-none bg-neutral-700 
							placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-400"
						/>
					</label>
				</div>
				<label className="w-full">
					<span className="pl-1 font-bold">Message</span>
					<textarea
						name="message"
						id="message"
						placeholder="Enter Your Message"
						rows={8}
						required
						className="w-full resize-none rounded-md border-none bg-neutral-700 
						placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-400"
					/>
				</label>
				<button
					type="submit"
					className="self-end rounded-lg border-none bg-neutral-200 p-1 opacity-80
					outline-none hover:opacity-100 focus:ring-2 focus:ring-green-400"
				>
					<p className="m-0 px-5 font-medium text-neutral-900">Send Message</p>
				</button>
			</form>
		</div>
	);
}
