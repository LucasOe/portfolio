import dedent from "dedent";
import Markdown from "react-markdown";

import { SlCheck } from "react-icons/sl";

import LinkButton from "@/components/LinkButton";

export default function SuccessPage() {
	return (
		<main className="mb-24 text-center">
			<SlCheck className="fill-accent-pink m-8 mx-auto size-32" />
			<Markdown className="bg-accent-pink from-accent-violet mb-2 inline-block bg-gradient-to-r bg-clip-text text-2xl font-medium text-transparent">
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
