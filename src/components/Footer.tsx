import { HashLink } from "react-router-hash-link";

export default function Footer() {
	return (
		<div className="absolute bottom-0 flex w-full justify-center">
			<HashLink to="/privacy#" className="focus prose-base my-6 rounded-sm no-underline outline-none">
				Privacy Policy
			</HashLink>
		</div>
	);
}
