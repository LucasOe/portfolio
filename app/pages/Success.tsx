import { SlCheck } from "react-icons/sl";
import { href } from "react-router";

import LinkButton from "@/components/LinkButton";

export default function SuccessPage() {
	return (
		<main className="mb-24 text-center">
			<SlCheck className="fill-accent-pink m-8 mx-auto size-32" />
			<p className="text-gradient mb-2 inline-block text-2xl font-medium">Form submitted successfully!</p>
			<p>
				Thank you! The form has been submitted successfully.
				<br />I will reply to you soon!
			</p>
			<div className="p-10">
				<LinkButton text={"Go Home"} to={href("/")} />
			</div>
		</main>
	);
}
