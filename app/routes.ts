import type { RouteConfig } from "@react-router/dev/routes";

export default [
	{
		path: "/",
		file: "./layouts/RootLayout.tsx",
		children: [
			{
				index: true,
				file: "./pages/Home.tsx",
			},
			{
				path: "privacy",
				file: "./pages/Privacy.tsx",
			},
		],
	},
	{
		path: "/success",
		file: "./pages/Success.tsx",
	},
] satisfies RouteConfig;
