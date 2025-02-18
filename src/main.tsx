import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Success from "@/pages/Success";

import "@/main.css";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/privacy",
				element: <Privacy />,
			},
		],
		errorElement: <ErrorPage />,
	},
	{
		path: "/success",
		element: <Success />,
		errorElement: <ErrorPage />,
	},
];

const router = createBrowserRouter(routes, {
	future: {
		v7_relativeSplatPath: true,
		v7_startTransition: true,
		v7_fetcherPersist: true,
		v7_normalizeFormMethod: true,
		v7_partialHydration: true,
		v7_skipActionErrorRevalidation: true,
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
