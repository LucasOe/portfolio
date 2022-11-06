import { useRouteError } from "react-router-dom";

type ErrorResponse = {
	status: number;
	statusText: string;
};

export default function ErrorPage() {
	const error: ErrorResponse = useRouteError() as ErrorResponse;

	return (
		<div className="min-h-screen flex justify-center bg-neutral-900 p-6">
			<div className="h-full sm:pt-20 md:pt-40 lg:pt-60 xl:pt-80">
				<div className="prose prose-lg prose-invert max-w-none text-neutral-200">
					<h1>{error.statusText}</h1>
					<p>It looks like there was an error.</p>
				</div>
			</div>
		</div>
	);
}
