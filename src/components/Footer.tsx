import { HashLink } from "react-router-hash-link";

export default function Footer() {
	return (
		<div className="absolute bottom-0 m-6 flex w-full justify-center">
			<div className="prose prose-invert">
				<HashLink to="/privacy#" className="focus rounded-sm no-underline outline-none">
					Privacy Policy
				</HashLink>
			</div>
		</div>
	);
}
