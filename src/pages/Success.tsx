import dedent from "dedent";
import { SlCheck } from "react-icons/sl";
import ReactMarkdown from "react-markdown";
import LinkButton from "../components/LinkButton";

export default function ErrorPage() {
	return (
		<div className="flex min-h-screen justify-center bg-neutral-900 p-6">
			<div className="h-full sm:pt-20 md:pt-40 lg:pt-60 xl:pt-80">
				<div className="flex flex-col items-center text-center text-neutral-200">
					<SlCheck className="m-8 h-1/3 w-1/3 text-green-400" />
					<ReactMarkdown className="mb-2 font-sans text-2xl font-medium text-green-400">
						Form submitted successfully!
					</ReactMarkdown>
					<ReactMarkdown className="font-sans font-medium text-neutral-400">
						{dedent`
							Thank you! The form has been submitted successfully.  
							I will reply to you soon!
						`}
					</ReactMarkdown>
					<LinkButton link={"/"} text={"Go Home"} className="mt-10 w-32" />
				</div>
			</div>
		</div>
	);
}
