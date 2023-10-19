import dedent from "dedent";
import { SlCheck } from "react-icons/sl";
import Markdown from "react-markdown";

import LinkButton from "@/components/LinkButton";

export default function ErrorPage() {
	return (
		<div className="not-prose mb-24 text-center">
			<SlCheck className="m-8 mx-auto h-32 w-32 text-green-400" />
			<Markdown className="mb-2 text-2xl font-medium text-green-400">Form submitted successfully!</Markdown>
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
