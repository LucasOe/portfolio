import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./main.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Success from "./pages/Success";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
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

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
	<StrictMode>
		<div className="flex min-h-screen flex-col items-center justify-center">
			<div className="prose prose-lg prose-invert relative max-w-4xl text-neutral-100 prose-p:text-neutral-200">
				<RouterProvider router={router} />
			</div>
		</div>
	</StrictMode>
);

function Layout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
