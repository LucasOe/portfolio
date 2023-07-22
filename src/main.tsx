import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Success from "./pages/Success";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/success",
		element: <Success />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/privacy",
		element: <Privacy />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
