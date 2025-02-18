import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "@/main.css";

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
