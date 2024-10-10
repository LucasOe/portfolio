import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import Success from "@/pages/Success";

import "@/main.css";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
