import { index, layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
	layout("./layouts/RootLayout.tsx", [index("./pages/Home.tsx"), route("privacy", "./pages/Privacy.tsx")]),
	route("success", "./pages/Success.tsx"),
] satisfies RouteConfig;
