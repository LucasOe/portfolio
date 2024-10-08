import { HashLink } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

export type FooterProps = React.ComponentProps<"div">;

export default function Footer({ className, ...rest }: FooterProps) {
	return (
		<div className={twMerge("not-prose flex w-full justify-center p-6", className)} {...rest}>
			<HashLink to="/privacy#" className="focus rounded-sm px-2 text-neutral-500 no-underline">
				Privacy Policy
			</HashLink>
		</div>
	);
}
