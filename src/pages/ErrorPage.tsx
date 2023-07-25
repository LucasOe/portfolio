import { useRouteError } from "react-router-dom";
import LinkButton from "../components/LinkButton";

type ErrorResponse = {
	status: number;
	statusText: string;
};

export default function ErrorPage() {
	const error: ErrorResponse = useRouteError() as ErrorResponse;

	return (
		<div className="not-prose mb-24 text-center">
			<p className="font-mono text-[12rem] font-bold leading-none">{error.status}</p>
			<p className="mb-10 text-5xl font-medium text-neutral-600">{error.statusText}</p>
			<LinkButton link={"/"} text={"Go Home"} />
		</div>
	);
}
