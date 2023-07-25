import { HashLink } from "react-router-hash-link";

export default function Footer() {
	return (
		<div className="not-prose absolute bottom-0 my-6 flex w-full justify-center">
			<HashLink to="/privacy#" className="focus rounded-sm px-1 leading-snug no-underline">
				Privacy Policy
			</HashLink>
		</div>
	);
}
