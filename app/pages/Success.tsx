import dedent from "dedent";
import { SlCheck } from "react-icons/sl";
import Markdown from "react-markdown";
import { href } from "react-router";

import LinkButton from "@/components/LinkButton";

export default function SuccessPage() {
	return (
		<main className="mb-24 text-center">
			<SlCheck className="fill-accent-pink m-8 mx-auto size-32" />
			<Markdown className="text-gradient mb-2 inline-block text-2xl font-medium">
				Form submitted successfully!
			</Markdown>
			<Markdown>
				{dedent`
					Thank you! The form has been submitted successfully.  
					I will reply to you soon!
				`}
			</Markdown>
			<div className="p-10">
				<LinkButton text={"Go Home"} to={href("/")} />
			</div>
		</main>
	);
}
