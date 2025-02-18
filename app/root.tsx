import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from "react-router";

import LinkButton from "./components/LinkButton";

import type { Route } from "./+types/root";

import stylesheet from "@/main.css?url";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap",
	},
	{ rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/svg+xml" href="/favicon.png" />
				<title>LucasOe&apos;s Portfolio</title>
				<meta
					name="description"
					content="The portfolio of Lucas Oelker - Visual Computing and Design student."
				/>
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
				<LinkButton text={"Go Home"} to={"/"} className="m-10" />
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
