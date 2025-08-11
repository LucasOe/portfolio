import type { ErrorComponentProps } from "@tanstack/react-router";
import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import mainCss from "@/main.css?url";
import { seo } from "@/utils/seo";

import "@fontsource-variable/roboto-flex/index.css";
import "@fontsource-variable/fira-code/index.css";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1.0",
			},
			...seo({
				title: "LucasOe's Portfolio",
				description: "Portfolio of Lucas Oelker – Visual Computing and Design student.",
			}),
		],
		links: [
			{
				rel: "stylesheet",
				href: mainCss,
			},
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon.png",
			},
		],
	}),
	component: RootComponent,
	errorComponent: ErrorComponent,
	notFoundComponent: NotFoundComponent,
});

function RootComponent() {
	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<HeadContent />
			</head>
			<body className="bg-primary text-neutral-200">
				<div className="relative flex min-h-dvh flex-col items-center justify-center">
					<div className="max-w-4xl px-6">
						<div className="absolute top-0 left-0 w-full">
							<Navbar />
						</div>
						<Outlet />
						<div className="absolute bottom-0 left-0 w-full">
							<Footer />
						</div>
					</div>
				</div>
				<Scripts />
			</body>
		</html>
	);
}

function ErrorComponent({ error }: ErrorComponentProps) {
	return (
		<main className="mb-24 text-center">
			<p className="font-mono text-[12rem] leading-none font-bold">{error.name}</p>
			<p className="text-5xl font-medium text-neutral-500">{error.message}</p>
			<Link
				to="/"
				className="focus m-10 inline-block rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-900 no-underline outline-hidden hover:bg-neutral-100"
			>
				Go Home
			</Link>
		</main>
	);
}

function NotFoundComponent() {
	return (
		<main className="mb-24 text-center">
			<p className="font-mono text-[12rem] leading-none font-bold">404</p>
			<p className="text-5xl font-medium text-neutral-500">Not Found</p>
			<Link
				to="/"
				className="focus m-10 inline-block rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-900 no-underline outline-hidden hover:bg-neutral-100"
			>
				Go Home
			</Link>
		</main>
	);
}
