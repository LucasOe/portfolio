import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/success")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<main className="mb-24 text-center">
			<div className="m-8 mx-auto">
				<FontAwesomeIcon icon={faCircleCheck} className="text-accent-pink text-9xl" />
			</div>
			<p className="text-gradient mb-2 inline-block text-2xl font-medium">Form submitted successfully!</p>
			<p>
				Thank you! The form has been submitted successfully.
				<br />I will reply to you soon!
			</p>
			<div className="p-10">
				<Link
					to="/"
					className="focus m-10 inline-block rounded-lg bg-neutral-300 px-5 py-2 font-medium text-neutral-900 no-underline outline-hidden hover:bg-neutral-100"
				>
					Go Home
				</Link>
			</div>
		</main>
	);
}
