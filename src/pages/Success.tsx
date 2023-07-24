import dedent from "dedent";
import { SlCheck } from "react-icons/sl";
import ReactMarkdown from "react-markdown";
import LinkButton from "../components/LinkButton";

export default function ErrorPage() {
	return (
		<div className="not-prose inline-block text-center">
			<SlCheck className="m-8 mx-auto h-32 w-32 text-green-400" />
			<ReactMarkdown className="mb-2 font-sans text-2xl font-medium text-green-400">
				Form submitted successfully!
			</ReactMarkdown>
			<ReactMarkdown className="mb-10 font-sans">
				{dedent`
					Thank you! The form has been submitted successfully.  
					I will reply to you soon!
				`}
			</ReactMarkdown>
			<LinkButton link={"/"} text={"Go Home"} />
		</div>
	);
}
