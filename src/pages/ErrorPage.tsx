import { useRouteError } from "react-router-dom";
import LinkButton from "../components/LinkButton";

type ErrorResponse = {
	status: number;
	statusText: string;
};

export default function ErrorPage() {
	const error: ErrorResponse = useRouteError() as ErrorResponse;

	return (
		<div>
			<div className="not-prose text-center">
				<p className="font-mono text-[12rem] font-bold leading-none">{error.status}</p>
				<p className="font-sans text-5xl font-medium text-neutral-400">{error.statusText}</p>
				<LinkButton link={"/"} text={"Go Home"} className="mt-10" />
			</div>
		</div>
	);
}
