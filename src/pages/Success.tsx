import dedent from "dedent";
import Markdown from "react-markdown";

import { SlCheck } from "react-icons/sl";

import LinkButton from "@/components/LinkButton";

export default function SuccessPage() {
	return (
		<div className="not-prose mb-24 text-center">
			<SlCheck className="m-8 mx-auto h-32 w-32 fill-[url(gradient.svg/#gradient)]" />
			<Markdown className="mb-2 inline-block bg-accent-pink bg-gradient-to-r from-accent-purple bg-clip-text text-2xl font-medium text-transparent">
				Form submitted successfully!
			</Markdown>
			<Markdown>
				{dedent`
					Thank you! The form has been submitted successfully.  
					I will reply to you soon!
				`}
			</Markdown>
			<LinkButton text={"Go Home"} to={"/"} className="m-10" />
		</div>
	);
}
