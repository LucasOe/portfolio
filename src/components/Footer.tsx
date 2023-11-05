import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type FooterProps = React.ComponentProps<"div">;

export default function Footer({ className, ...rest }: FooterProps) {
	return (
		<div className={twMerge("not-prose py-6 px-12 flex w-full justify-center", className)} {...rest}>
			<HashLink to="/privacy#" className="focus rounded-sm px-2 text-neutral-500 no-underline">
				Privacy Policy
			</HashLink>
		</div>
	);
}
