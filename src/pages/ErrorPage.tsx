import { useRouteError } from "react-router-dom";
import LinkButton from "../components/Button";

type ErrorResponse = {
	status: number;
	statusText: string;
};

export default function ErrorPage() {
	const error: ErrorResponse = useRouteError() as ErrorResponse;

	return (
		<div className="flex min-h-screen justify-center bg-neutral-900 p-6">
			<div className="h-full sm:pt-20 md:pt-40 lg:pt-60 xl:pt-80">
				<div className="text-center text-neutral-200">
					<p className="font-mono text-xxl font-bold leading-none">{error.status}</p>
					<p className="font-sans text-5xl font-medium text-neutral-400">{error.statusText}</p>
					<LinkButton link={"/"} text={"Go Home"} className="mt-10" />
				</div>
			</div>
		</div>
	);
}
