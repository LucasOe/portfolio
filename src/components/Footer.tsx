import { HashLink } from "react-router-hash-link";

export default function Footer() {
	return (
		<div className="absolute bottom-0 my-6 flex w-full justify-center">
			<HashLink to="/privacy#" className="focus prose-base rounded-sm no-underline outline-none">
				Privacy Policy
			</HashLink>
		</div>
	);
}
