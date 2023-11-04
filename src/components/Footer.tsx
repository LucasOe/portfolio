import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type FooterProps = React.ComponentProps<"div">;

export default function Footer({ className, ...rest }: FooterProps) {
	return (
		<div className={twMerge("not-prose absolute bottom-0 my-6 flex w-full justify-center", className)} {...rest}>
			<HashLink
				to="/privacy#"
				className="focus-primary rounded-sm px-1 leading-snug text-neutral-500 no-underline"
			>
				Privacy Policy
			</HashLink>
		</div>
	);
}
