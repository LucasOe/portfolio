import dedent from "dedent";
import Markdown from "react-markdown";

import { SlCheck } from "react-icons/sl";

import LinkButton from "@/components/LinkButton";

export default function SuccessPage() {
	return (
		<main className="mb-24 text-center">
			<SlCheck className="size-32 m-8 mx-auto fill-accent-pink" />
			<Markdown className="mb-2 inline-block bg-accent-pink bg-gradient-to-r from-accent-violet bg-clip-text text-2xl font-medium text-transparent">
				Form submitted successfully!
			</Markdown>
			<Markdown>
				{dedent`
					Thank you! The form has been submitted successfully.  
					I will reply to you soon!
				`}
			</Markdown>
			<div className="p-10">
				<LinkButton text={"Go Home"} to={"/"} />
			</div>
		</main>
	);
}
