import { href } from "react-router";
import { twMerge } from "tailwind-merge";

export type FooterProps = React.ComponentProps<"div">;

export default function Footer({ className, ...rest }: FooterProps) {
	return (
		<div className={twMerge("flex w-full justify-center p-6", className)} {...rest}>
			{/* https://github.com/remix-run/react-router/issues/13084 */}
			<a href={href("/privacy")} className="focus px-2 py-0.5 text-lg text-neutral-500 no-underline">
				Privacy Policy
			</a>
		</div>
	);
}
