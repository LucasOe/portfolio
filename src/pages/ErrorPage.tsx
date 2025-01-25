import { useRouteError } from "react-router-dom";

import LinkButton from "@/components/LinkButton";

interface ErrorResponse {
	status: number;
	statusText: string;
}

export default function ErrorPage() {
	const error: ErrorResponse = useRouteError() as ErrorResponse;

	return (
		<main className="mb-24 text-center">
			<p className="font-mono text-[12rem] leading-none font-bold">{error.status}</p>
			<p className="text-5xl font-medium text-neutral-500">{error.statusText}</p>
			<LinkButton text={"Go Home"} to={"/"} className="m-10" />
		</main>
	);
}
