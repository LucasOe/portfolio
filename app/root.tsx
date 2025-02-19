import { Links, Meta, Outlet, Scripts, ScrollRestoration, href, isRouteErrorResponse } from "react-router";

import type { Route } from "./+types/root";

import LinkButton from "@/components/LinkButton";

import "@fontsource-variable/roboto-flex/index.css";
import "@fontsource-variable/fira-code/index.css";
import "@/main.css";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/svg+xml" href="/favicon.png" />
				<title>LucasOe&apos;s Portfolio</title>
				<meta name="description" content="Portfolio of Lucas Oelker – Visual Computing and Design student." />
				<Meta />
				<Links />
			</head>
			<body className="bg-primary text-neutral-200">
				<div className="relative flex min-h-dvh flex-col items-center justify-center">
					<div className="max-w-4xl px-6">
						{children}
						<ScrollRestoration />
						<Scripts />
					</div>
				</div>
			</body>
		</html>
	);
}

export default function Root() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
