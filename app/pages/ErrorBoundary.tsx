import { href, isRouteErrorResponse, useRouteError } from "react-router";

import LinkButton from "@/components/LinkButton";

export default function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<main className="mb-24 text-center">
				<p className="font-mono text-[12rem] leading-none font-bold">{error.status}</p>
				<p className="text-5xl font-medium text-neutral-500">{error.statusText}</p>
				<LinkButton text={"Go Home"} to={href("/")} className="m-10" />
			</main>
		);
	} else if (error instanceof Error) {
		return (
			<main className="mb-24 text-center">
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre className="font-mono">{error.stack}</pre>
			</main>
		);
	} else {
		return <h1>Unknown Error</h1>;
	}
}
